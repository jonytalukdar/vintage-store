// helper functions
export const featuredProducts = (data) => {
  return data.filter((item) => {
    return item.featured === true;
  });
};

// paginate function

export const paginate = (products) => {
  const itemsPerPage = 3;
  const numberOfPage = Math.ceil(products.length / itemsPerPage);
  const newProducts = Array.from({ length: numberOfPage }, () => {
    return products.splice(0, itemsPerPage);
  });
  console.log(newProducts);
  // our code goes here

  return products;
};
