import { NavLink } from 'react-router';
import { BiogramCardProps } from './types';

export const BiogramCard = ({ person }: BiogramCardProps) => (
  <NavLink to={`/biogram/${person.name}_${person.surname}`}>
    <div className="bg-white border-2 border-white shadow-xl justify-center flex hover:lg:shadow-lg hover:lg:scale-105 hover:border-green-400 transition-all relative hover:lg:z-50">
      <img
        alt={person.surname + person.name}
        src={`/assets/${person.name.toLowerCase()}_${person.surname.toLowerCase()}/stencil.jpg`}
        className="object-cover h-64"
      />
      <div className="absolute bottom-0 bg-white text-black px-4 py-2 w-full">
        <div>{person.name}</div>
        <span className="uppercase font-black"> {person.surname}</span>
      </div>
    </div>
  </NavLink>
);
