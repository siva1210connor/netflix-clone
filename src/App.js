import React, { useState } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import ProfileScreen from './Pages/ProfileScreen';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useState(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged Out
        dispatch(logout());
      }
    });

    return unSubscribe;
  }, [dispatch]);
  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
