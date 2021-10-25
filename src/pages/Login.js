import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();

  //setup user context

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(true);

  let isEmpty = false;

  const isMemberToggleHandler = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return <div>login</div>;
};

export default Login;
