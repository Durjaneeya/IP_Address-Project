var latLong = "";
var lat = "";
var long = "";
const map = document.getElementById("map");
$.getJSON(`https://ipinfo.io/103.57.84.135/json?token=894c517946f314`, function (data) {
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
