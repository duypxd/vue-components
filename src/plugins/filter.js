import Vue from "vue";
import moment from "moment";

Vue.filter("formatDateTimeUtc", day => {
  if (typeof day === "string") {
    return moment.utc(day).local().format("DD/MM/YYYY HH:mm:ss")
  }
  return moment(day).format("DD/MM/YYYY HH:mm:ss");
});

Vue.filter("vnd", currency => {
  return currency.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
});

