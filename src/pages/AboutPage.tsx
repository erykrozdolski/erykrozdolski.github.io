import { Container } from '../ui/atoms/Container/Container';

export const AboutPage = () => {
  const paragraphClasses = `lg:text-l md:text-m text-s`;
  const largeTitle = 'md:text-3xl text-2xl font-bold my-4 ';
  const mediumTitle = 'text-2xl font-bold my-4';
  return (
    <Container>
      <div className="text-justify mb-8">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/IdWoyn_0f7M"
          title="Szablony lokalne"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mb-8 w-full aspect-video"
        ></iframe>
        <div className="">
          <p className={`py-4 ${largeTitle}`}>
            <b>Szablony LOKALne projekt</b>, który zakładał oddanie hołdu i szacunku wybitnym
            jednostkom, w historii naszej lokalnej społeczności, poprzez serię szablonów (technika
            graffiti).
          </p>
          <div className="py-2">
            <p className={mediumTitle}>Pamięć</p>
            <p className={paragraphClasses}>
              Chciałem oddać hołd ludziom o wyjątkowym poczuciu moralności, inteligencji,
              wrażliwości, pełni troski o życie społeczne mieszkańców, którzy nie zważając na swoje
              życie działali w sprawach niepodległości Polski. Ludziom, którzy powinni być wzorem
              (szablonem!) dla nas. Tożsamość, zbiór postaw i wartości nie bierze się z powietrza,
              ona tutaj istniała już wcześniej, tylko należy o niej przypominać, żeby ją zachować.
              Historie namalowanych osób, są różne, wiążą się z wieloma wyzwaniami, z którymi
              musieli się w swoich życiach mierzyć, I wś., II wś., obozy koncentracyjne, Katyń,
              walka o niepodległość. Między tymi wydarzeniami, potrafili być inspiracją dla młodych
              ludzi, edukować ich, prowadzić życie naukowe czy artystyczne.
            </p>
          </div>
          <div className="py-2">
            <p className={mediumTitle}>Edukacja</p>
            <p className={paragraphClasses}>
              Powszechna forma pozwala na łatwiejsze dotarcie do wszystkich mieszkańców bez podziału
              na wiek (edukacja nie tylko w wieku szkolnym). Osoby, upamiętnione muralami, były
              postaciami, które poświecały swoją energię i życie innym, dla których dobro
              społeczności, było często ważniejsze niż dobro własne. O życiu każdego z nich, można
              przeczytać z tablic informacyjnych, które widnieją przy malunkach.
            </p>
          </div>
          <div>
            <p className={mediumTitle}>Estetyka</p>
            <p className={paragraphClasses}>
              Chciałem, żeby szablony wpisały się w krajobraz naszej miejscowości, żeby ludzie je
              widzieli drodze do domu, do pracy, gdziekolwiek w Bralinie mieszkają. Mam nadzieję, że
              jakiejś części naszej społeczności te murale, po prostu wydadzą się ładne, estetyczne,
              a nowe wersje tych do tej pory, mniej lub bardziej anonimowych pustych ścian, okażą
              się miłymi akcentami w krajobrazie Bralina.
            </p>
          </div>

          <p className={paragraphClasses}></p>
          <p className={mediumTitle}>Realizacja</p>
          <p className={paragraphClasses}>
            Pierwszy mural powstał jesienią 2022. Dziękuję wszystkim sponsorom, którzy pomogli mi
            sfinansować farby oraz tablice informacyjne. Dziękuję państwu Małgorzacie i Cezaremu
            Grześkowiak, państwu Kindze i Damianowi Kozicy oraz mojemu bratu Kacprowi Rozdolskiemu.
            Dziękuję panu Jackowi Kuropce za pomoc w napisaniu i zredagowaniu tekstów
            biograficznych, oraz za dyskusje historyczne. Dziękuję wszystkim, którzy zgodzili się
            żeby na murach, które do nich należą znalazły szablony.
            <br /> Dzięki Wam Bralin jest odrobinę ciekawiej wyglądającą miejscowością. Dziękuję
            swojej żonie Monice, za wsparcie które mi dała przez cały ten długi czas realizacji
            projektu.
          </p>
        </div>
      </div>
    </Container>
  );
};
