import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { biograms } from '../../../const';
import { NavLink } from 'react-router';
import L from 'leaflet';

export const Map = () => {
  const biogramList = Object.entries(biograms);

  return (
    <MapContainer
      className="h-full w-full"
      center={[51.2857, 17.9064]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {biogramList.map((data) => {
        const [fullName, person] = data;
        const { birthdate, deathdate, role } = person;
        const lifeLabel = `[${birthdate}-${deathdate}]`;
        const index = `${person.name}_${person.surname}`.toLowerCase();
        const myIcon = L.icon({
          iconUrl: `/assets/${index}/icon.png`,
          iconSize: [48, 48],
          iconAnchor: [16, 16],
        });
        return (
          <Marker
            position={{ lat: person.location[0], lng: person.location[1] }}
            key={fullName}
            icon={myIcon}
          >
            <Popup>
              <div className="grid w-[250px]">
                <NavLink to={`/biogram/${fullName}`} className="text-black">
                  <img
                    src={`/assets/${index}/stencil.jpg`}
                    alt={fullName}
                    className="h-auto w-[250px] col-span-1"
                  />
                  <div className="p-4">
                    <div className="font-black my-0 text-m text-black">
                      {person?.name} {person?.surname}
                    </div>
                    <div className="text-sm text-black">{lifeLabel}</div>
                    <div className="text-sm text-black">{role}</div>
                    <button className="text-white mt-2 text-sm w-full bg-green-400 now hover:text-black uppercase border-2 hover:border-black px-4 py-2 hover:shadow-lg  transition-all ease-in-out font-bold">
                      Dowiedz się więcej
                    </button>
                  </div>
                </NavLink>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
