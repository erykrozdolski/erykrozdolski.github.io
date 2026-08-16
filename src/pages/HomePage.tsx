import { Map } from 'organisms';
import { NavLink } from 'react-router';
import { BiogramList } from './BiogramList';
import { Container } from '../ui/atoms/Container/Container';

export const HomePage = () => {
  const paragraphClass = 'md:text-l text-m my-4';

  return (
    <div className="text-justify">
      <div className="h-screen overflow-hidden">
        <Map />
      </div>
      <div className="py-8">
        <Container>
          <p className="text-4xl my-8 font-bold">Biogramy</p>
          <BiogramList />
          <div className="max-w-5xl lg:mx-auto mt-8 ">
            <p className="text-4xl my-8 font-bold">Spacer z szablonami</p>
            <p className={paragraphClass}>
              Spoglądając na mapę wszystkich murali, łatwo jest zaplanować sobie trasę spacerową lub
              rowerową, w której możemy zobaczyć wszystkie szablony.
            </p>
            <p className={paragraphClass}>
              Lokalizacja wielu z nich jest nieprzypadkowa.{' '}
              <NavLink to={`/biogram/Jan_Rybark`}>
                <span className="underline">Hanys Rybark</span>{' '}
              </NavLink>
              z zadumą spogląda na swój dom rodzinny na ulicy 3 maja,
              <NavLink to={`/biogram/Melchior_Grossek`}>
                <span className="underline"> Melchior Grossek</span>
              </NavLink>{' '}
              również znajduje się niedaleko swojego domu na Wrocławskiej, a jego brat{' '}
              <NavLink className="text-green-400" to={`/biogram/Stanisław_Grossek`}>
                <span className="underline">Stanisław</span>
              </NavLink>{' '}
              patrzy w kierunku ulicy Braci Grossków
            </p>
            <p className={paragraphClass}>
              Spacery polecam rozpocząć od "starego" Bralina i Hanysa Rybarka, czyli ulicy 3-maja,
              później zobaczyć obrazy Melchiora na budynku starej bralińskiej gospody. Następnie
              ulicą Krętą (Kutzner) i Spokojną przejść na ulicę Ogrodową (ks. Wojciechowski),
              skręcić na Nową (Antoni Gabriel, Bolesław Płókarz), odbić jeszcze na Kalinową
              (Przywara), żeby potem przejść Lipową (Stanisław Grossek, Jan Nowak, Ignacy Majchrzak)
              aż do Kościelnej na początku której czeka na nas Benedykt Jański, a na końcu Tomasz
              Gabriel. Kończąc spacer, jesteśmy niedaleko Pomnika Ofiar, Represji i Walki o Wolność,
              oryginalne wzniesiony po I wś., bralińskiego cmentarza, ulicy Błotnej (Ludwik Szulc)
              ale też placu zabaw obok starego kościoła ewangelickiego i domu Zofii Lemanik.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};
