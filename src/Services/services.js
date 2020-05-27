export const processShowData = (data) => {
  var returnObj = {};
  var t = data.map((val) => {
    returnObj[val.show.id] = val.show;
  });
  return returnObj;
};
