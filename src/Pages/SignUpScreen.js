import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';
function SignUpScreen() {
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='sign-up-screen'>
      <form>
        <h2>Sign In</h2>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={PasswordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>
          Submit
        </button>
        <h4>
          <span className='sign-up-screen-grey'>New to Netflix?</span>
          <span className='sign-up-screen-link' onClick={register}>
            {' '}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
