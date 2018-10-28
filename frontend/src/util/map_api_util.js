// 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
const $ = window.$;
export const fetchLocation = addressStr => (
    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${process.env.GOOGLE_API_KEY}`,
        method: 'GET',
    })
);

export const fetchAddress = latLng => {
    const latLngString = `${latLng.lat},${latLng.lng}`;
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLngString}&key=${
        process.env.GOOGLE_API_KEY
      }`,
      method: "GET"
    });
};

// markers=icon:<icon_url>|latlng
export const makeMapUrl = (toilet) => {
    const toiletLatLng = `${toilet.lat},${toilet.lng}`;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${toiletLatLng}&zoom=17&size=300x300&markers=color:red%7C${toiletLatLng}&key=${process.env.GOOGLE_API_KEY}`;
}