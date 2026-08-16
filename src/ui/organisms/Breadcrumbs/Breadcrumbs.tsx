import { BiogramType } from 'const';
import { NavLink } from 'react-router';

export const Breadcrumbs = ({ biogram }: { biogram: BiogramType }) => {
  return (
    <div className="flex my-4">
      <NavLink to="/biogramy" className="underline font-bold text-green-400">
        Biogramy
      </NavLink>
      <span className="px-2">/</span>
      <p className="">
        {biogram.name} <span className="uppercase font-bold">{biogram.surname}</span>
      </p>
    </div>
  );
};
