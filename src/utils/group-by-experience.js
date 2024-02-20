export const groupByExperience = (data) => {
  const groupedData = data.reduce((result, item) => {
    const { experience } = item;
    const existingItemIndex = result.findIndex((obj) => obj.name === experience);

    if (existingItemIndex !== -1) {
      result[existingItemIndex].count++;
    } else {
      result.push({ name: experience, count: 1 });
    }

    return result;
  }, []);

  return groupedData;
};
