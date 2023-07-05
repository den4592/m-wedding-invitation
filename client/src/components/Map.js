import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const Map = () => {
  const container = useRef(null);

  const initMap = async () => {
    const kakao = await axios.get("https://dapi.kakao.com/v2/maps/sdk.js?", {
      headers: { Authorization: "a0932da775fdc825b83a9bb691f19328" },
    });
    console.log(kakao);
    const center = new kakao.maps.LatLng(36.6070385, 127.420712);
    const options = {
      center,
      level: 8,
    };
    const map = new kakao.maps.Map(container.current, options);

    var markerPosition = new kakao.maps.LatLng(36.6070385, 127.420712);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  return <MapContainer id="KakaoMap" ref={container} />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  zindex: 0;
  margin: 0 auto;
`;

export default Map;
