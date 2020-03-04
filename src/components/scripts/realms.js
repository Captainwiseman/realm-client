// const moment = require("moment");
// const numeral = require("numeral");

const getTimestampObject = timestamp => {
  const datetime = timestamp.split(",");
  return {
    date: datetime[0],
    time: datetime[1]
  };
};

const formatRealms = realms => {
  const formattedRealms = realms.map(realm => {
    // realm.population.common = numeral(realm.population.common).format("0,0");
    return realm;
  });
  return formattedRealms;
};

module.exports = {
  getTimestampObject,
  formatRealms
};
