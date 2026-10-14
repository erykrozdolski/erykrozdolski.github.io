import { NavLink } from 'react-router';

export const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink className="underline text-green-400 font-bold" to={to}>
      {children}
    </NavLink>
  );
};
