export const GroupByExperience = (data) => {
  return data.reduce((acc, obj) => {
    const { experience } = obj;

    acc[experience] = acc[experience] || { count: 0 };
    acc[experience].count++;
    return acc;
  }, {});
};
