import { getNumbers } from "./getNumber";
export const getCodePrice = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumbers(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortArr = arr.sort();
    console.log(sortArr);
    return {
      ...item,
      min:
        sortArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[1] === 2
            ? 1
            : 0
          : arrMaxMin[0],
      max:
        sortArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[1] === 2
            ? 2
            : arrMaxMin[0]
          : sortArr.indexOf(arrMaxMin[0]) === 1
          ? 99999999
          : arrMaxMin[1],
    };
  });
};

export const getCodes = (arrMaxMin, prices) => {
  const pricesWithMinMax = getCodePrice(prices);
  return pricesWithMinMax.filter(
    (item) =>
      (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
      (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1])
  );
};
export const getCodesArea = (arrMaxMin, areas) => {
  const areaWithMinMax = getCodePrice(areas);
  return areaWithMinMax.filter(
    (item) =>
      (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
      (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1])
  );
};
