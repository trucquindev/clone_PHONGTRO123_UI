import { getNumbers } from "./getNumber";
export const getCodePrice = (totals, min, max) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumbers(item.value);
    console.log(arrMaxMin);
    return {
      ...item,
      min:
        arrMaxMin.length === 2
          ? arrMaxMin[0]
          : arrMaxMin[0] === min
          ? 0
          : arrMaxMin[0],
      max:
        arrMaxMin.length === 2
          ? arrMaxMin[1]
          : arrMaxMin[0] === max
          ? 99999999
          : arrMaxMin[0],
    };
  });
};

export const getCodes = (entry, prices, min, max) => {
  const pricesWithMinMax = getCodePrice(prices, min, max);
  return pricesWithMinMax.filter(
    (item) => item.min <= entry && item.max >= entry
  );
};
export const getCodesArea = (entry, areas, min, max) => {
  const areaWithMinMax = getCodePrice(areas, min, max);
  return areaWithMinMax.filter(
    (item) => item.min <= entry && item.max >= entry
  );
};
