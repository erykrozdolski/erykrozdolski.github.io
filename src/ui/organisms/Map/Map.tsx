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
            <Popup maxWidth={500}>
              <div className="grid grid-cols-4 min-w-[500px]">
                <img
                  src={`/assets/${index}/stencil.jpg`}
                  alt={fullName}
                  className="h-full w-auto col-span-auto "
                />
                <div className="grid gap-1 p-4 col-span-3">
                  <div className="font-black my-0">{fullName}</div>
                  <div className="font-sans text-sm">{lifeLabel}</div>
                  <div className="font-sans text-sm">{role}</div>
                  <NavLink to={`/biogram/${fullName}`}>
                    <button className="text-white mt-2 text-sm w-full bg-green-400 hover:text-black uppercase border-2 hover:border-black px-4 py-2 hover:shadow-lg  transition-all ease-in-out font-bold">
                      Dowiedz się więcej
                    </button>
                  </NavLink>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
