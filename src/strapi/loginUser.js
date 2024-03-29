import axios from 'axios';
import { url } from '../utils/URL';

const loginUser = async ({ email, password }) => {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password: password,
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export default loginUser;
