const CryptoJS = require("crypto-js");
const MD5 = require("crypto-js/md5");

// 拼多多应用client_secret
const SECRET = "18ea1df3f7d611bd483ee05180a7839ad3d7f9dd";
// 拼多多应用client_id
const CLIENTID = "47f53837405f46fa96556260cb4b24a5";
// 拼多多推广位PID
const PDDPID = "13762185_181910951";

function sign(params) {
  var sorted = Object.keys(params).sort();
  var basestring = SECRET;
  for (var i = 0, l = sorted.length; i < l; i++) {
    var k = sorted[i];
    basestring += k + params[k];
  }
  // console.log(params)
  basestring += SECRET;
  console.log("basestring ==>", basestring);
  return md5(basestring).toUpperCase();
}

function timestamp() {
  return parseInt(new Date().getTime() / 1000);
}

function md5(s) {
  return MD5(s).toString(CryptoJS.enc.Hex);
}

function YYYYMMDDHHmmss(d, options) {
  d = d || new Date();
  if (!(d instanceof Date)) {
    d = new Date(d);
  }

  var dateSep = "-";
  var timeSep = ":";
  if (options) {
    if (options.dateSep) {
      dateSep = options.dateSep;
    }
    if (options.timeSep) {
      timeSep = options.timeSep;
    }
  }
  var date = d.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  var month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var hours = d.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var mintues = d.getMinutes();
  if (mintues < 10) {
    mintues = "0" + mintues;
  }
  var seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    d.getFullYear() +
    dateSep +
    month +
    dateSep +
    date +
    " " +
    hours +
    timeSep +
    mintues +
    timeSep +
    seconds
  );
}

module.exports = {
  md5,
  YYYYMMDDHHmmss,
  sign,
  timestamp,
  CLIENTID,
  PDDPID,
};
