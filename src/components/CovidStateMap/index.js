import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { latLongMap } from "../../latLongMap";
import { Icon } from "leaflet";

const covidIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/Sam-Phillemon/maps-with-react-leaflet/master/src/images/covid19.svg",
  iconSize: [25, 25],
});

function CovidStateMap({ data }) {
  const [activeCovid, setActiveCovid] = useState();
  return (
      <MapContainer center={[20.593683, 78.962883]} zoom={5}>
        <>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          {latLongMap.map((eachData) => (
            <Marker
              icon={covidIcon}
              key={eachData.state}
              position={[eachData.latitude, eachData.longitude]}
              eventHandlers={{
                click: () => {
                  console.log("data in state name", data);
                  const apiData = data.filter(
                    (item) => item.state_name === eachData.state
                  );
                  setActiveCovid({
                    latitude: eachData.latitude,
                    longitude: eachData.longitude,
                    state: eachData.state,
                    ...apiData[0],
                  });
                },
              }}
            />
          ))}
          {activeCovid && (
            <Popup
              position={[activeCovid.latitude, activeCovid.longitude]}
              onClose={() => {
                setActiveCovid(null);
              }}
            >
              <div>
                <h1>{activeCovid.state}</h1>
                <p>positive cases: {activeCovid.positive}</p>
                <p>cured cases: {activeCovid.cured}</p>
                <p>death cases: {activeCovid.death}</p>

                <p>Active cases: {activeCovid.active}</p>
              </div>
            </Popup>
          )}
        </>
      </MapContainer>
  );
}

export default CovidStateMap;
