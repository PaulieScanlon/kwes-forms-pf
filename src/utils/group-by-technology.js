export const groupByTechnology = (data) => {
  const groupedData = data.reduce((result, item) => {
    const { technology } = item;

    technology.forEach((key) => {
      const name = Object.values(key)[0];
      const existingItemIndex = result.findIndex((obj) => obj.name === name);

      if (existingItemIndex !== -1) {
        result[existingItemIndex].count++;
      } else {
        result.push({ name, count: 1 });
      }
    });

    return result;
  }, []);

  return groupedData;
};
