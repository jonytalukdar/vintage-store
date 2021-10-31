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

  // const newProducts = Array.from({ length: numberOfPage }, () => {
  //   return products.splice(0, itemsPerPage);
  // });

  const newProducts = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });

  // our code goes here

  return newProducts;
};
