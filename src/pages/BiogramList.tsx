import { biograms } from '../const';
import { BiogramCard } from 'organisms';

export const BiogramList = () => (
  <div className="grid grid-flow-row lg:grid-cols-5 md:grid-cols-4 grid-cols-2 grid-rows gap-4 mb-6">
    {Object.entries(biograms).map(([key, data]) => (
      <BiogramCard person={data} key={key} />
    ))}
  </div>
);
