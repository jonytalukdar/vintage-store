import React from 'react';

export default function Product({ item }) {
  const {
    id,
    title,
    description,
    image: { url },
  } = item;
  return <h1>hello from product</h1>;
}
