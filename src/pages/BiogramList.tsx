import { biograms } from '../const';
import { BiogramCard } from 'organisms';
import { Container } from '../ui/atoms/Container/Container';

export const BiogramList = () => (
  <Container>
    <div className="grid grid-flow-row md:grid-cols-5 sm:grid-cols-2 grid-cols-1 grid-rows gap-4 mb-6">
      {Object.entries(biograms).map(([key, data]) => (
        <BiogramCard person={data} key={key} />
      ))}
    </div>
  </Container>
);
