window.api_key = "AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw";
const head = document.getElementsByTagName("head").item(0);
const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute(
  "src",
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw&libraries=places`
);
head.appendChild(script);
window.marriage = new Promise((res, rej) => {
  // script.addEventListener("load", res);
  // console.log('things')
  // setTimeout(res, 5000);
  res();
});
