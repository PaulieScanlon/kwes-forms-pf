export const groupByTime = (data) => {
  const groupedData = data.reduce((result, item) => {
    const { time } = item;
    const existingItemIndex = result.findIndex((obj) => obj.name === time);

    if (existingItemIndex !== -1) {
      result[existingItemIndex].count++;
    } else {
      result.push({ name: time, count: 1 });
    }

    return result;
  }, []);

  return groupedData;
};
