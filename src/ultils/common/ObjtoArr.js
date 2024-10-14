const ObjToArr = (obj) =>
  Object.entries(obj).map((item) => ({ [item[0]]: item[1] }));
export default ObjToArr;
