export const findMaxValue = (data) => {
  return data.reduce((max, item) => Math.max(max, item.count), 0);
};
