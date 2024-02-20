export const groupByTechnology = (data) => {
  return data.reduce((items, item) => {
    const { unique_name } = item;

    unique_name.forEach((key) => {
      const name = Object.values(key)[0];
      items[name] = (items[name] || 0) + 1;
    });
    return items;
  }, {});
};
