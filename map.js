var latLong = "";
var lat = "";
var long = "";
const map = document.getElementById("map");
var ip_Address = "";

$.getJSON(`https://api.ipify.org/?format=json`, function (data) {
  //   console.log(data);
  ip_Address = data.ip;
});


setTimeout(() => {
$.getJSON(`https://ipinfo.io/${ip_Address}/json?token=894c517946f314`, function (data) {
  latLong = data.loc;
  var latLongSplit = latLong.split(",");
  lat = latLongSplit[0];
  long = latLongSplit[1];
  console.log("latitude hai", lat);
  console.log("longitude hai", long);
});
let link = `https://maps.google.com/maps?q=${lat},${long} &output=embed`;
const iframe = document.createElement("iframe");
iframe.src = link;
map.appendChild(iframe);

}, 1000);
