import type { GetServerSideProps, NextPage } from 'next';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Marker from '../components/marker/Marker';

interface KaKaoMapWebViewProps {
  latLng: {
    lat: number;
    lng: number;
  };
  address?: string;
  name?: string;
}

const Home: NextPage<KaKaoMapWebViewProps> = ({ latLng, name, address }) => {
  const { lat, lng } = latLng;
  return (
    <Map center={{ lat, lng }} style={{ width: '100%', height: '100%' }}>
      <CustomOverlayMap position={{ lat, lng }}>
        {(name || address) && <Marker name={name} address={address} />}
      </CustomOverlayMap>
    </Map>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { lat, lng, address, name } = ctx.query;

  return {
    props: {
      latLng: {
        lat,
        lng,
      },
      address,
      name,
    },
  };
};
