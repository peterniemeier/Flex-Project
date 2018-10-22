const google = window.google;

export default class MarkerManager {
    constructor(map) {
        this.map = map;
    }

    createMarker(position) {
        const icon = {
            url: '/toilet.png',
            scaledSize: new google.maps.Size(15, 15),
            anchor: new google.maps.Point(0, 0),
        };

        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon,
        });

        return marker
    }
}