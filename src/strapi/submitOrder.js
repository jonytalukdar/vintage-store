import axios from 'axios';
import { url } from '../utils/URL';

const submitOrder = async ({
  name,
  total,
  items,
  stripeTokenId,
  userTokenId,
}) => {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        stripeTokenId,
      },
      {
        headers: {
          Authorization: `Bearer ${userTokenId}`,
        },
      }
    )
    .catch((error) => console.log(error));

  return response;
};

export default submitOrder;
