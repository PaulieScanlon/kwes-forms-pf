export const groupByExperience = (data) => {
  return data.reduce((items, item) => {
    const { experience } = item;

    items[experience] = items[experience] || { count: 0 };
    items[experience].count++;
    return items;
  }, {});
};
