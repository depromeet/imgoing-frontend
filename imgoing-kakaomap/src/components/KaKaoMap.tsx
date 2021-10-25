import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Place } from '@/types';
import InfoWindow from './InfoWindow';

interface KaKaoMapProps {
  keyword: string;
  info: Place | undefined;
  setInfo: (state: Place) => void;
}

const KaKaoMap = (props: KaKaoMapProps) => {
  const { keyword, info, setInfo } = props;

  const [markers, setMarkers] = useState<Place[]>([]);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map || !keyword) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const markers: Place[] = [];
        // console.log(data);

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            coordinate: {
              lat: +data[i].y,
              lng: +data[i].x,
            },
            name: data[i].place_name,
            address: data[i].address_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  return (
    <Map
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker: Place) => (
        <MapMarker
          key={`marker-${marker.name}-${marker.coordinate.lat},${marker.coordinate.lng}`}
          position={marker.coordinate}
          onClick={() => setInfo(marker)}
        >
          {info && info.name === marker.name && <InfoWindow marker={marker} />}
        </MapMarker>
      ))}
    </Map>
  );
};

export default KaKaoMap;
