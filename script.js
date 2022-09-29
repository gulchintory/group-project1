//card 2 load content without showing the cards

// when the page loads hide the firstcard.
function goToWorkpage() {
    location.replace("levels.html")
}

function goToWorkpage1() {
    location.replace("start.html")
}

function goToWorkpage2() {
    location.replace("start.html")
}

function goToWorkpage3() {
    location.replace("start.html")
}

function goToWorkpage4() {
    location.replace("card2.html")
}


$(window).ready(function () {
    $("#firstcard").hide();
});

// window.onload = function() {
//     document.getElementById('#firstcard');

//   };


//when genbutton pressed add the class show to the firstcard.

$("#Genbutton").on("click", function () {
    $("#firstcard").show();
});


// changing the card to the map on the map button click
// $('#mapChange').on('click', function() { 
//     $('firstcard').each(function() { 
//       if($(this).hasClass('active')) { 
//           $(this).removeClass('active');
//       } else { 
//           $(this).addClass('active');
//       }
//     })
// });

//   id="map"

//#firstcard is the div with the card we want to change


// weather card

// const geoWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-37.21255068945561&lon=142.39814979780982&appid=419a6f585c25a4bb328b301f9ff349f4";


// async function fetchText() {
//     let response = await fetch(geoWeather);

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK
    

//     if (response.status === 200) {
//         let data = await response.text();
//         console.log("data")
//     }
// }

// fetchText();

// // get the weather from weatherapi
// async function getWeather() {
//     let url = geoWeather;
//     try {
//         let result = await fetch(url);
//         return await result.json();

//     } catch (error) {
//         console.log(error);
//     }
// };

// //develop the render weather data function that renders data

// async function renderWeather() {
//     let data = await getWeather();
//     let html = "";
//        data.forEach(data => {
        
//         let htmlSegment = ` <div class="card">
//                                 <div class="test" id="weather">
//                                 <h2>${data.main.temp}</h2>   
//                                 <h3>${data.sea_level}</h3>                                 
//                                 </div>
//                             </div>`;

//         html += htmlSegment;

//     });

//     let container = document.querySelector('.container')
//     container.innerHTML = html;
// }
// renderWeather();








// // list function

// function generateList() {
//     let listItems = document.createElement('li');

//     document.getElementById('weather').append(listItems);
// }
// generateList()





// function getcurrentweather(test) {

//     document.querySelector('weather').innerHTML = listItems;

//     const card = document.createElement('div').classList.add('Card');

//     const cardBody = document.createElement('div').classList.add('card-body');

//     const temperature = document.createElement("p").classList("card-text").text("Temperature: " + test.main.temp + "°");



//     cardBody.append(temperature);
//     card.append(cardBody);
//     document.getElementById('weather').append(card)





// getcurrentweather()

// }getcurrentweather('#weather')











// this is the map api and leafletjs code for creating and populating map page.

const destination = ([-37.21255068945561, 142.39814979780982])
const map = L.map('map').setView(destination, 8);

L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
    maxZoom: 19,
    attribution: '© Thunderforest',
}).addTo(map);

var marker = L.marker(destination).addTo(map);

var latlngs = [
    [-37.21255068945561, 142.39814979780982],
    [-37.227705423132925, 142.40411562055428],
    [-37.24834176475045, 142.43226808595017],
    [-37.2354583722141, 142.44979069658905],
    [-37.20757270772265, 142.4291913317434],
    [-37.21255068945561, 142.39814979780982],
];

var polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

marker.bindPopup("<b>this is the hike</b>").openPopup();
polyline.bindPopup();
