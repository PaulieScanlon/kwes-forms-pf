export const GroupByTime = (data) => {
  return data.reduce((acc, obj) => {
    const { time } = obj;

    acc[time] = acc[time] || { count: 0 };
    acc[time].count++;
    return acc;
  }, {});
};
