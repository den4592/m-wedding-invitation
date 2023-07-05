import { MapMarker, Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 36.6070385, lng: 127.420712 }}
      style={{ width: "100%", height: "300px" }}
    >
      <MapMarker position={{ lat: 36.6070385, lng: 127.420712 }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
