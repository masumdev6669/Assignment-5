import { use } from 'react';
import type { ITechnologies } from '../../types/technologies';
import AvailableTechnologies from './AvailableTechnologies';

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className='container mx-auto'>

        <div>
            <h2 className='text-5xl font-bold'>Explore the <span className=' bg-linear-to-l from-purple-700 to-[#F97316] rple-700 bg-clip-text text-transparent'> Technologies </span></h2>
            <p className='mt-4'>Pick one technology per category to build your ideal stack.</p>
            
        </div>

      <AvailableTechnologies technologies={technologies} />
    </div>
  );
};

export default Technologies;