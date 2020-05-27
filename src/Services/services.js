export const processShowData = (data) => {
  var returnObj = {};
  data.forEach((val) => {
    returnObj[val.show.id] = val.show;
  });
  return returnObj;
};
