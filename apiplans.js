let planes = [];
let initialCenter = { lat: 34.052235, lng: -118.243683 };
const planes_API = "https://opensky-network.org/api/states/all";

const renderAllPlanes = () => {
  initMap({ lat: 34.052235, lng: -118.243683 }, planes);
};
const YourLocation = () => {
  const getCoordinates = (lat, lng) => {
    console.log(lat, lng);
    initMap({ lat, lng }, planes);
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      getCoordinates(position.coords.latitude, position.coords.longitude);
    });
  }
};

getplanes(planes_API);
async function getplanes(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.states);
  foreach_plane(data.states);
}
function foreach_plane(array) {
  array.forEach(array => {
    planes.push({
      degree: array[9],
      lat: array[6],
      lng: array[5],
      plane_code: array[1],
    });
  });

  renderAllPlanes();
}
let map_container = document.querySelector("#map");

function initMap(MapCenter, planesArray) {
  let options = {
    zoom: 10,
    center: MapCenter,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  };
  // map
  let map = new google.maps.Map(map_container, options);
  // marker
  const icon = {
    url: "./image/Vector0.svg",
    // rotate: does not work with url. i can use rotate with svg code but it is gonna be very slow because +7000 planes
    scaledSize: new google.maps.Size(40, 40),
  };

  function marker(plane) {
    // changing the icon (the number after "vector" is the deg)
    if (plane.degree >= 355 && plane.degree < 5) {
      icon.url = "./image/Vector0.svg";
    } else if (plane.degree >= 5 && plane.degree < 15) {
      icon.url = "./image/Vector10.svg";
    } else if (plane.degree >= 15 && plane.degree < 25) {
      icon.url = "./image/Vector20.svg";
    } else if (plane.degree >= 25 && plane.degree < 35) {
      icon.url = "./image/Vector30.svg";
    } else if (plane.degree >= 35 && plane.degree < 45) {
      icon.url = "./image/Vector40.svg";
    } else if (plane.degree >= 45 && plane.degree < 55) {
      icon.url = "./image/Vector50.svg";
    } else if (plane.degree >= 55 && plane.degree < 65) {
      icon.url = "./image/Vector60.svg";
    } else if (plane.degree >= 65 && plane.degree < 75) {
      icon.url = "./image/Vector70.svg";
    } else if (plane.degree >= 75 && plane.degree < 85) {
      icon.url = "./image/Vector80.svg";
    } else if (plane.degree >= 85 && plane.degree < 95) {
      icon.url = "./image/Vector90.svg";
    } else if (plane.degree >= 95 && plane.degree < 105) {
      icon.url = "./image/Vector100.svg";
    } else if (plane.degree >= 105 && plane.degree < 115) {
      icon.url = "./image/Vector110.svg";
    } else if (plane.degree >= 115 && plane.degree < 125) {
      icon.url = "./image/Vector120.svg";
    } else if (plane.degree >= 125 && plane.degree < 135) {
      icon.url = "./image/Vector130.svg";
    } else if (plane.degree >= 135 && plane.degree < 145) {
      icon.url = "./image/Vector140.svg";
    } else if (plane.degree >= 145 && plane.degree < 155) {
      icon.url = "./image/Vector150.svg";
    } else if (plane.degree >= 155 && plane.degree < 165) {
      icon.url = "./image/Vector160.svg";
    } else if (plane.degree >= 165 && plane.degree < 175) {
      icon.url = "./image/Vector170.svg";
    } else if (plane.degree >= 175 && plane.degree < 185) {
      icon.url = "./image/Vector180.svg";
    } else if (plane.degree >= 185 && plane.degree < 195) {
      icon.url = "./image/Vector190.svg";
    } else if (plane.degree >= 195 && plane.degree < 205) {
      icon.url = "./image/Vector200.svg";
    } else if (plane.degree >= 205 && plane.degree < 215) {
      icon.url = "./image/Vector210.svg";
    } else if (plane.degree >= 215 && plane.degree < 225) {
      icon.url = "./image/Vector220.svg";
    } else if (plane.degree >= 225 && plane.degree < 235) {
      icon.url = "./image/Vector230.svg";
    } else if (plane.degree >= 235 && plane.degree < 245) {
      icon.url = "./image/Vector240.svg";
    } else if (plane.degree >= 245 && plane.degree < 255) {
      icon.url = "./image/Vector250.svg";
    } else if (plane.degree >= 255 && plane.degree < 265) {
      icon.url = "./image/Vector260.svg";
    } else if (plane.degree >= 265 && plane.degree < 275) {
      icon.url = "./image/Vector270.svg";
    } else if (plane.degree >= 275 && plane.degree < 285) {
      icon.url = "./image/Vector280.svg";
    } else if (plane.degree >= 285 && plane.degree < 295) {
      icon.url = "./image/Vector290.svg";
    } else if (plane.degree >= 295 && plane.degree < 305) {
      icon.url = "./image/Vector300.svg";
    } else if (plane.degree >= 305 && plane.degree < 315) {
      icon.url = "./image/Vector310.svg";
    } else if (plane.degree >= 315 && plane.degree < 325) {
      icon.url = "./image/Vector320.svg";
    } else if (plane.degree >= 325 && plane.degree < 335) {
      icon.url = "./image/Vector330.svg";
    } else if (plane.degree >= 335 && plane.degree < 345) {
      icon.url = "./image/Vector340.svg";
    } else if (plane.degree >= 345 && plane.degree < 355) {
      icon.url = "./image/Vector350.svg";
    } else if (plane.degree >= 355 && plane.degree < 5) {
      icon.url = "./image/Vector0.svg";
    }
    new google.maps.Marker({
      position: { lat: plane.lat, lng: plane.lng },
      map,
      title: plane.plane_code,
      icon: icon,
    });
  }

  planesArray.forEach(plane => {
    marker(plane);
  });
}
let filteredPlanes = [];
let resultDiv = document.getElementById("results");
const clearInputValue = () => {
  resultDiv.innerHTML = "";
};
const FilterPlane = () => {
  let inputValue = document.getElementById("search_Input").value;
  //   console.log(planes);

  filteredPlanes = [];
  for (let i = 0; i < planes.length; i++) {
    if (planes[i].plane_code.toLowerCase().includes(inputValue.toLowerCase())) {
      filteredPlanes.push(planes[i]);
    }
  }
  // for (let i = 0; i < 10; i++) {
  //   resultDiv.innerHTML += `<div>${filteredPlanes[i].plane_code}</div>`;
  // }

  if (filteredPlanes.length == 0) {
    resultDiv.style.display = "none";
    clearInputValue();
  }

  if (filteredPlanes.length > 9) {
    resultDiv.style.display = "block";
    console.log(">9");
    clearInputValue();
    for (let i = 0; i < 10; i++) {
      resultDiv.innerHTML += `<div onclick="SearchPlane(event)">${filteredPlanes[i].plane_code}</div>`;
    }
  }
  if (filteredPlanes.length < 10 && filteredPlanes.length > 0) {
    resultDiv.style.display = "block";
    clearInputValue();
    for (let i = 0; i < filteredPlanes.length; i++) {
      resultDiv.innerHTML += `<div onclick="SearchPlane(event)">${filteredPlanes[i].plane_code}</div>`;
    }
  }
  if (inputValue === "") {
    resultDiv.style.display = "none";
    clearInputValue();
  }
};
function SearchPlane(event) {
  console.log(event);
  console.log(event.target.childNodes[0].nodeValue);
  const planeCode = event.target.childNodes[0].nodeValue;
  console.log(planes.filter(plane => plane.plane_code === planeCode)[0]);
  const selectedPlane = planes.filter(plane => plane.plane_code === planeCode);
  const selectedPlaneLatLng = {
    lat: selectedPlane[0].lat,
    lng: selectedPlane[0].lng,
  };
  console.log(selectedPlaneLatLng);
  initMap(selectedPlaneLatLng, selectedPlane);
  clearInputValue();
  resultDiv.style.display = "none";
}
