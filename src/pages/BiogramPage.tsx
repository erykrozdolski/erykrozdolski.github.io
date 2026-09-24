import { useParams } from 'react-router';
import { biograms } from '../const';
import { Breadcrumbs } from 'organisms';
import { Container } from '../ui/atoms/Container/Container';
import { BiogramList } from './BiogramList';
import { Loader } from '../ui/atoms/Loader/Loader';

export const BiogramPage = () => {
  const { id = '' } = useParams();
  const biogram = biograms[id as keyof typeof biograms];
  const { surname, name, role } = biogram;
  const lifeLabel = `[${biogram.birthdate}-${biogram.deathdate}]`;
  const index = `${biogram.name}_${biogram.surname}`.toLowerCase();
  return (
    <Container>
      <div className="relative z-10 md:aspect-video aspect-[9/16] overflow-hidden">
        <div>
          <div className="bg-black absolute w-full h-full z-10 opacity-full md:opacity-75"></div>
          <div className="flex absolute z-20">
            <div className="text-white grid h-fit gap-4 md:m-8 m-4 ease-in-out transition-all animate-fadeIn">
              <div className="mb-16 grid gap-1">
                <p className="font-light text-3xl md:text-5xl lg:text-6xl">
                  {biogram.name} <span className="font-black uppercase">{biogram.surname}</span>
                </p>
                <p className="md:text-xl text-m">{role}</p>
                <p className="md:text-xl text-m font-bold">{lifeLabel}</p>
              </div>
            </div>
          </div>
          <div className="absolute z-20 text-white grid h-fit gap-4 m-4 md:m-8 bottom-0 right-0">
            <p className="md:text-xl text-xs">{biogram.address}</p>
          </div>
        </div>
        <video
          className="w-full relative md:h-90 h-full md:z-0 z-[20] ease-in-out transition-all animate-fadeIn"
          src={`/assets/${index}/video.mp4`}
          {...(biogram.hasPoster && { poster: `/assets/${index}/bg.jpeg` })}
          preload="auto"
          autoPlay
          muted
          playsInline
        />
      </div>
      <Breadcrumbs biogram={biogram} />

      <div className="mt-8 pb-16 ease-in-out transition-all animate-fadeIn">
        <p className="text-4xl lg:text-4xl mb-6">Życiorys</p>
        <div className="w-full mb-6">
          <div className="md:text-lg text-l pb-3 text-justify">{biogram.desc}</div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-2 lg:flex gap-4 w-full">
          <img
            className="border-2 border-white lg:h-[500px] w-fit h-auto"
            alt={surname + name}
            src={`/assets/${index}/original.jpg`}
          />
          <img
            className="border-2 border-white lg:h-[500px] w-fit h-auto"
            alt={surname + name}
            src={`/assets/${index}/stencil.jpg`}
          />
        </div>
      </div>
      <p className="text-4xl lg:text-4xl mb-6">Inne szablony</p>
      <BiogramList />
    </Container>
  );
};

export default BiogramPage;
