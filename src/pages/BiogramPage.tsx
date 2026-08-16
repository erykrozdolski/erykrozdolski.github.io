import { useParams } from 'react-router';
import { biograms } from '../const';
import { Breadcrumbs } from 'organisms';
import { Container } from '../ui/atoms/Container/Container';
import { BiogramList } from './BiogramList';

export const BiogramPage = () => {
  const { id = '' } = useParams();
  const biogram = biograms[id as keyof typeof biograms];
  const { surname, name, role } = biogram;
  const lifeLabel = `[${biogram.birthdate}-${biogram.deathdate}]`;
  const index = `${biogram.name}_${biogram.surname}`.toLowerCase();
  return (
    <Container>
      <Breadcrumbs biogram={biogram} />

      <div className="relative z-10">
        <div>
          <div className="bg-black absolute w-full h-full z-10 opacity-75"></div>
          <div className="flex absolute z-20">
            <div className="text-white grid h-fit gap-4 md:m-8 m-4">
              <div className="text-xl md:text-5xl lg:text-6xl mb-16 grid gap-2">
                <p className="font-light">
                  {biogram.name} <span className="font-black uppercase">{biogram.surname}</span>
                </p>
                <p className="md:text-xl text-xs">{role}</p>
                <p className="md:text-xl text-xs">{lifeLabel}</p>
              </div>
            </div>
          </div>
          <div className="absolute z-20 text-white grid h-fit gap-4 m-8 bottom-0 right-0">
            <p className="text-xl">{biogram.address}</p>
          </div>
        </div>
        <video
          className="w-full relative h-90"
          src={`/assets/${index}/video.mp4`}
          poster={`/assets/${index}/bg.jpeg`}
          autoPlay
          muted
          playsInline
        ></video>
      </div>
      <div className="mt-8 pb-16">
        <p className="text-4xl lg:text-4xl mb-6">Życiorys</p>
        <div className="w-full mb-6">
          <div className="md:text-lg text-l pb-3 text-justify">{biogram.desc}</div>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-4 w-full">
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
