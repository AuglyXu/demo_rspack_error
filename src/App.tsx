import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import L from 'leaflet';
import { tiledMapLayer } from '@supermap/iclient-leaflet';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
    var map = L.map('map', {
      crs: L.CRS.EPSG4326,
      center: [0, 0],
      maxZoom: 18,
      zoom: 1
    });
    tiledMapLayer(url).addTo(map);
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
