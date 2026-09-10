import { Map } from 'organisms';
import { NavLink } from 'react-router';
import { BiogramList } from './BiogramList';
import { Container } from '../ui/atoms/Container/Container';
import { Indent } from '../ui/atoms/Indent/Indent';

export const HomePage = () => {
  const paragraphClass = 'md:text-xl text-l my-4';

  return (
    <div className="text-justify">
      <div className="h-screen overflow-hidden">
        <Map />
      </div>
      <div className="py-8">
        <Container>
          <div className="max-w-5xl lg:mx-auto lg:mt-4 mt-0">
            <p className="md:text-4xl text-2xl mb-4 font-bold">Trasa spacerowa z szablonami</p>
            <p className={paragraphClass}>
              <Indent />
              Spoglądając na mapę wszystkich murali, łatwo jest zaplanować sobie trasę spacerową lub
              rowerową, w której możemy zobaczyć wszystkie szablony. Lokalizacja wielu z nich jest
              nieprzypadkowa.{' '}
              <NavLink to={`/biogram/Jan_Rybark`}>
                <span className="underline">Hanys Rybark</span>{' '}
              </NavLink>
              z zadumą spogląda na swój dom rodzinny na ulicy 3 maja,{' '}
              <NavLink to={`/biogram/Melchior_Grossek`}>
                <span className="underline">Melchior Grossek</span>
              </NavLink>{' '}
              również znajduje się niedaleko swojego domu na Wrocławskiej, a jego brat{' '}
              <NavLink to={`/biogram/Stanisław_Grossek`}>
                <span className="underline">Stanisław</span>
              </NavLink>{' '}
              patrzy w kierunku ulicy Braci Grossków
            </p>
            <p className={paragraphClass}>
              <Indent />
              Spacery polecam rozpocząć od "starego" Bralina i Hanysa Rybarka, czyli ulicy 3-maja,
              później zobaczyć obrazy Melchiora na budynku starej bralińskiej gospody. Następnie
              ulicą Krętą (Kutzner) i Spokojną przejść na ulicę Ogrodową (ks. Wojciechowski),
              skręcić na Nową (Antoni Gabriel, Bolesław Płókarz), odbić jeszcze na Kalinową
              (Przywara), żeby potem przejść Lipową (Stanisław Grossek, Jan Nowak, Ignacy Majchrzak)
              aż do Kościelnej na początku której czeka na nas Benedykt Jański, a na końcu Tomasz
              Gabriel.
              <br></br>
              <br></br>
              <Indent />
              Kończąc spacer, jesteśmy niedaleko Pomnika Ofiar, Represji i Walki o Wolność,
              oryginalne wzniesiony po I wś., bralińskiego cmentarza, ulicy Błotnej (Ludwik Szulc)
              ale też placu zabaw obok starego kościoła ewangelickiego i domu Zofii Lemanik.
            </p>
          </div>
          <hr className="my-8" />
          <p className="text-4xl my-8 font-bold">Biogramy</p>

          <BiogramList />
        </Container>
      </div>
    </div>
  );
};
