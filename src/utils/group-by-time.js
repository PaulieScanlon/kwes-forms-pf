export const groupByTime = (data) => {
  return data.reduce((items, item) => {
    const { time } = item;

    items[time] = items[time] || { count: 0 };
    items[time].count++;
    return items;
  }, {});
};
