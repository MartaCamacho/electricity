export const getPercentageComparedToAverage = (
  userConsumption: number,
  buildingAverage: number
) => {
  if (buildingAverage === 0) return 0;
  return (userConsumption / buildingAverage) * 100;
};
