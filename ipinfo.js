var timeZone = "";
var pinCode = "";
$.getJSON(`https://ipinfo.io/103.57.84.135/json?token=894c517946f314`, function (data) {
  // console.log(data);
  ourTime = data.timezone;
  pinCode = data.postal;
});

//----------------------------------------------------------------
jQuery.get(
  "https://ipinfo.io/103.57.84.135/json?token=894c517946f314",
  function (e) {
    console.log(e);
    $(".ip").html(e.ip);
    $(".city").html(e.city);
    $(".region").html(e.region);
    $(".org").html(e.org);
    $(".hostname").html(e.hostname);
    $(".postal").html(e.postal);
    // $(".timezone").html(e.timezone);
  },
  "jsonp"
);
//---------------------------------------------------------------------

$.getJSON(`https://geo.ipify.org/api/v2/country,city?apiKey=at_TWN5bBhixAt5OLrWCh9fg62MkZW8K&ipAddress`, function (data) {
  console.log(data);
  $("#lati").html(data.location.lat);
  $("#longi").html(data.location.lng);
  $(".hostname").html(data.hostname);
  $(".timezone").html(data.location.timezone);
});



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
      console.log(data);
      console.log(data[0].Message);
      document.getElementById("message").innerHTML = data[0].Message;
      console.log(data[0].PostOffice[0]);
      console.log(data[0].PostOffice[0].Name);


      let postOfficeData = "";
      data[0].PostOffice.map((value) => {
        console.log(value);
        postOfficeData += `<ul style="border:2px solid black; border-radius:5px; list-style-type:none; font-size:40px; padding:10px; display:inline-block" >
                    <li>Name: <span id="name">${value.Name}</span></li>
                    <li>Branch Type: <span id="Branch Type"> ${value.BranchType}</span></li>
                    <li>Delivery Status: <span id="Delivery Status"> ${value.DeliveryStatus}</span></li>
                    <li>District: <span id="District"> ${value.District}</span></li>
                    <li>Division: <span id=Division"> ${value.Division}</span></li>
                </ul>
                <br><br> `;

        document.getElementById("postinfo").innerHTML = postOfficeData;
      });
    });
}, 1000);
