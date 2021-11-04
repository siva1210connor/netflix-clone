import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.css';
import PlanScreen from './PlanScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profile-screen'>
      <Navbar />
      <div className='profile-screen-body'>
        <h1>Edit profile</h1>
        <div className='profile-screen-info'>
          <img
            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
            alt=''
          />
          <div className='profile-screen-details'>
            <h2>{user.email}</h2>
            <div className='profile-screen-plans'>
              <h3>plans</h3>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className='profile-screen-signout'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
