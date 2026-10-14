import { MenuLink } from './MenuLink/MenuLink';

export const Menu = ({ toggleMenu }: { toggleMenu: (value: boolean) => void }) => {
  const onClick = () => toggleMenu(false);
  return (
    <>
      <MenuLink to="/mapa" label="Mapa szablonów" onClick={onClick} />
      <MenuLink label="Biogramy" to="/biogramy" onClick={onClick} />
      <MenuLink to="/projekt" label="O projekcie" onClick={onClick} />
    </>
  );
};
