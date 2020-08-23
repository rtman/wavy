// export const getUniqueArrayOfObjects = <T, K extends keyof T>(
//   arr: T[],
//   comp: K
// ) => {
//   // store the comparison  values in array
//   const unique = arr
//     .map((e) => e[comp])

//     // store the indexes of the unique objects
//     .map((e, i, final) => final.indexOf(e) === i && i)

//     // eliminate the false indexes & return unique objects
//     .filter((e) => (e ? arr[e] : false))
//     .map((e) => (e ? arr[e] : false));

//   return unique;
// };

export const getUniqueArrayOfObjects = <T, K extends keyof T>(
  myArr: T[],
  prop: K
) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

// export const getUnique = <T, K extends keyof T>(arr: T[], field: K) => {
//   const result = [];
//   const map = new Map();
//   for (const item of arr) {
//     if (!map.has(item[field])) {
//       map.set(item[field], true); // set any value to Map
//       const { [field], ...rest };
//       result.push({
//         id: item[field],
//         ...rest,
//       });
//     }
//   }
// };
