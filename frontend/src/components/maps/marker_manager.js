const google = window.google;

export default class MarkerManager {
    constructor(map) {
        this.map = map;
    }

    createMarker(position) {
        const icon = {
            url: "https://image.flaticon.com/icons/svg/1175/1175936.svg", 
            scaledSize: new google.maps.Size(20, 20), 
            anchor: new google.maps.Point(12, 12) 
        };

        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon,
        });

        return marker
    }
}