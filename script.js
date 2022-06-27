// const API ='AIzaSyDP78txYW9ds-Q94SlBj6n2lLYBlBeIuM8'

// let map_container = document.querySelector("#map");

// function initMap() {
//   let options = {
//     zoom: 10,
//     center: { lat: 34.052235, lng: -118.243683 },
//     styles: [
//       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{ color: "#263c3f" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#6b9a76" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ color: "#38414e" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#212a37" }],
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9ca5b3" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{ color: "#746855" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#1f2835" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#f3d19c" }],
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{ color: "#2f3948" }],
//       },
//       {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#17263c" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#515c6d" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{ color: "#17263c" }],
//       },
//     ],
//   };
//   // map
//   let map = new google.maps.Map(map_container, options);
//   // marker
//   const icon = {
//     url: "./image/Vector.svg",
//     size: new google.maps.Size(44, 35),
//     scaledSize: new google.maps.Size(44, 35),
//     anchor: new google.maps.Point(0, 50),
//   };

//   function marker(pos, code) {
//     new google.maps.Marker({
//       position: pos,
//       map,
//       title: code,
//       icon: icon,
//     });
//   }

//   plane.forEach((pos, idx) => {
//     marker(pos, plane_code[idx]);
//   });
// }
