import { Map } from 'organisms';
import { BiogramList } from './BiogramList';
import { Container } from '../ui/atoms/Container/Container';
import { Indent } from '../ui/atoms/Indent/Indent';
import { Link } from '../ui/atoms/Link/Link';

export const HomePage = () => {
  const paragraphClass = 'md:text-xl text-l my-4';

  return (
    <div className="text-justify">
      <div className="md:h-screen overflow-hidden h-[75vh]">
        <Map />
      </div>
      <div className="py-8">
        <Container>
          <div className="max-w-5xl lg:mx-auto lg:mt-4 mt-0">
            <p className="md:text-4xl text-2xl mb-4 font-bold">Spacer z szablonami</p>
            <p className={paragraphClass}>
              <Indent />
              Spoglądając na mapę wszystkich murali, łatwo jest zaplanować sobie trasę spacerową lub
              rowerową, w której możemy zobaczyć wszystkie szablony. Lokalizacja wielu z nich jest
              nieprzypadkowa. <Link to={`/biogram/Jan_Rybark`}>Hanys Rybark</Link> z zadumą spogląda
              na swój dom rodzinny na ulicy 3 maja,{' '}
              <Link to={`/biogram/Melchior_Grossek`}>Melchior Grossek</Link> również znajduje się
              niedaleko swojego domu na Wrocławskiej, a jego brat{' '}
              <Link to={`/biogram/Stanisław_Grossek`}>Stanisław</Link> patrzy w kierunku ulicy Braci
              Grossków
            </p>
            <p className={paragraphClass}>
              <Indent />
              Spacery polecam rozpocząć od "starego" Bralina i Hanysa Rybarka, czyli ulicy 3-maja,
              później zobaczyć obrazy Melchiora na budynku starej bralińskiej gospody. Następnie
              ulicą Krętą (<Link to={`/biogram/Stanisław_Kutzner`}>Kutzner</Link>) i Spokojną
              przejść na ulicę Ogrodową (
              <Link to={`/biogram/Stefan_Wojciechowski`}>ks. Wojciechowski</Link>), skręcić na Nową
              (<Link to={`/biogram/Antoni_Gabriel`}>Antoni Gabriel</Link>,{' '}
              <Link to={`/biogram/Bolesław_Płókarz`}>Bolesław Płókarz</Link>), odbić jeszcze na
              Kalinową (<Link to={`/biogram/Michał_Przywara`}>Przywara</Link>), żeby potem przejść
              Lipową (<Link to={`/biogram/Stanisław_Grossek`}>Stanisław Grossek</Link>,{' '}
              <Link to={`/biogram/Jan_Nowak`}>Jan Nowak</Link>,{' '}
              <Link to={`/biogram/Ignacy_Majchrzak`}>Ignacy Majchrzak</Link>) aż do Kościelnej na
              początku której czeka na nas{' '}
              <Link to={`/biogram/Benedykt_Jański`}>Benedykt Jański</Link>, a na końcu{' '}
              <Link to={`/biogram/Tomasz_Gabriel`}>Tomasz Gabriel</Link>.<br></br>
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
