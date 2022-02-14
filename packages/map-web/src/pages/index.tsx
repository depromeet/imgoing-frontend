import type { NextPage } from 'next';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Marker from '../components/marker/Marker';

const Home: NextPage = () => {
  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '100%' }}>
      <CustomOverlayMap position={{ lat: 33.5563, lng: 126.79581 }}>
        <Marker name='명동롯데백화점' address='test' />
      </CustomOverlayMap>
      {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <Marker name='test' address='test' />
      </MapMarker> */}
    </Map>
  );
};

export default Home;
