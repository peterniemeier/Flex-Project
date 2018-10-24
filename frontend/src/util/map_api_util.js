// 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
const $ = window.$;
export const fetchLocation = addressStr => (
    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${window.api_key}`,
        method: 'GET',
    })
);

export const fetchAddress = latLng => {
    const latLngString = `${latLng.lat},${latLng.lng}`;
    return $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLngString}&key=${window.api_key}`,
        method: 'GET'
    })
};