/*global kakao*/
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(36.6070385, 127.420712),
      level: 4,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(36.6070385, 127.420712);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "300px", zIndex: "0", margin: "0 auto" }}
    ></div>
  );
};

export default Map;
