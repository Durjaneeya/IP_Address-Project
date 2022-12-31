var timeZone = "";
var pinCode = "";
var latLong = "";
var lat = "";
var long = "";
$.getJSON(`https://ipinfo.io/103.57.84.135/json?token=894c517946f314`, function (data) {
  // console.log(data);
  ourTime = data.timezone;
  pinCode = data.postal;
  latLong = data.loc;
  var latLongSplit = latLong.split(",");
  lat = latLongSplit[0];
  long = latLongSplit[1];
});

//---------------------------------------------------------------------

$.getJSON(`https://geo.ipify.org/api/v2/country,city?apiKey=at_TWN5bBhixAt5OLrWCh9fg62MkZW8K&ipAddress`, function (data) {
// console.log(data);
$("#lati").html(data.location.lat);
$("#longi").html(data.location.lng);
});

//----------------------------------------------------------------
jQuery.get(
  "https://ipinfo.io/103.57.84.135/json?token=894c517946f314",
  function (e) {
    // console.log(e);
    $(".ip").html(e.ip);
    $("#lati").html(lat);
    $("#longi").html(long);
    $(".city").html(e.city);
    $(".region").html(e.region);
    $(".org").html(e.org);
    $(".hostname").html(window.location.hostname);
    $(".postal").html(e.postal);
    $(".timezone").html(e.timezone);
  },
  "jsonp"
);


var myDate = "";
var getTime = function () {
  myDate = new Date().toLocaleString("en-US", { timeZone: ourTime });

  document.getElementById("dnt").innerHTML = myDate;
  // console.log(myDate);
};

setInterval(getTime, 1000);

//-------------------------------------------------------------------------------------------------

setTimeout(() => {
  // console.log("pincode is ",pinCode)
  fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("message").innerHTML = data[0].Message;

      let postOfficeData = "";
      data[0].PostOffice.map((value) => {
        // console.log(value);
        postOfficeData += `<div class="col-12 col-md-6 box mb-5" >
        <div class="postValues fw400">
          <p>Name : <span id="name">${value.Name}</span></p>
          <p>Branch Type : <span id="Branch Type"> ${value.BranchType}</span></p>
          <p>Delivery Status : <span id="Delivery Status"> ${value.DeliveryStatus}</span></p>
          <p>District : <span id="District"> ${value.District}</span></p>
          <p>Division : <span id=Division"> ${value.Division}</span></p>
        </div>
       </div>`;

        document.getElementById("postDiv").innerHTML = postOfficeData;
      });
    });
}, 1000);

document.querySelector(".inputValue").addEventListener("keyup", () => {
  debugger;
  var input, filter, li, i;
  input = document.querySelector(".inputValue");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("box");
  for (i = 0; i < li.length; i++) {
    let title = li[i].querySelector(".postValues");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("d-none");
    } else {
      li[i].classList.add("d-none");
    }
  }
});
