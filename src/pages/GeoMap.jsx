import { EsriProvider } from "leaflet-geosearch";
import { useEffect } from "react";
// import 'node_modules/leaflet-geosearch/dist/geosearch.css';

function GeoMap() {
  const provider = new EsriProvider();

  async function coba() {
    const results = await provider.search({
      query: "JL.Nurtanio Utara No.9 RT 3 RW 4 Bandung",
    });
    console.log(results);
  }

  useEffect(() => {
    coba();
  });

  return <div>GeoMap</div>;
}

export default GeoMap;
