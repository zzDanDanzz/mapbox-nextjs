import Map from 'react-map-gl';

// import your api key
import { environment } from '../environment';
const YOUR_MAPIR_TOKEN = environment.YOUR_MAPIR_TOKEN

export default function Home() {
  return <Map
  initialViewState={{
    longitude: 51.375433528216654,
    latitude: 35.73356434056531,
    zoom: 11,
  }}
  style={{ width: 600, height: 400 }}
  // choose your style from https://help.map.ir/documentation/styles/
  mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style.json"
  // send your api key along with every request to map.ir (get your api key here: https://corp.map.ir/registration)
  transformRequest={(url: string) => {
    return {
      url,
      headers: {
        'x-api-key': YOUR_MAPIR_TOKEN, //Mapir api key
      },
    };
  }}
/>
}
