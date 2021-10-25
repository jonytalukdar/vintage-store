import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();

  //setup user context

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(false);

  let isEmpty = false;

  const isMemberToggleHandler = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? 'Log In' : 'Sign Up'}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* single input start */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}

        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}

        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all input feild</p>
        )}
        {/* submit button */}
        {!isEmpty && (
          <button type="submit" className="btn btn-primary btn-block">
            submit
          </button>
        )}
        {/* toggle login and sign up */}
        <p className="register-link">
          {isMember ? 'Need an account ?' : 'Already have an account ?'}{' '}
          <button type="button" onClick={isMemberToggleHandler}>
            Click Here
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
