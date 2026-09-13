import { useState } from 'react';
import { toast } from 'react-toastify';
import type { ITechnologies } from '../../types/technologies';

interface AvailableTechnologiesProps {
  technologies: ITechnologies[];
}

const badgeColorMap: Record<string, string> = {
  'Popular': 'bg-blue-50 text-blue-500',
  'Versatile': 'bg-emerald-50 text-emerald-500',
  'Fast': 'bg-orange-50 text-orange-500',
  'Standard': 'bg-emerald-50 text-emerald-500',
  'Top SQL': 'bg-blue-50 text-blue-500',
  'Cache': 'bg-pink-50 text-pink-500',
  'Ubiquitous': 'bg-orange-50 text-orange-500',
  'Essential': 'bg-blue-50 text-blue-500',
  'Robust': 'bg-blue-50 text-blue-500',
  'Modern': 'bg-cyan-50 text-cyan-600',
  'Containers': 'bg-cyan-50 text-cyan-600',
  'SSR / Edge': 'bg-purple-50 text-purple-500',
};

const AvailableTechnologies = ({ technologies }: AvailableTechnologiesProps) => {
  const [stack, setStack] = useState<ITechnologies[]>([]);

  const addToStack = (tech: ITechnologies) => {
    // Check if already in stack
    if (stack.find((item) => item.name === tech.name)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const removeFromStack = (techName: string) => {
    setStack(stack.filter((item) => item.name !== techName));
    toast.info(`${techName} removed from stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.error('All technologies removed!');
  };

  return (
    <div className="p-8 md:p-12 bg-white">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const badgeStyle = badgeColorMap[tech.badge] || 'bg-blue-50 text-blue-500';
              const isInStack = stack.some((item) => item.name === tech.name);

              return (
                <div 
                  key={tech.name} 
                  className={`bg-white rounded-xl p-5 shadow-sm flex flex-col transition-all ${
                    isInStack ? 'border border-black' : 'border border-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain" />
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${badgeStyle}`}>
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">{tech.description}</p>

                  <div className="flex items-center justify-between text-xs mb-5">
                    <span className="bg-gray-100 text-gray-600 font-medium px-2.5 py-1.5 rounded-md">
                      {tech.category}
                    </span>
                    <span className="text-gray-500 font-medium">{tech.level}</span>
                    <div className="flex items-center gap-1 text-gray-700 font-medium">
                      <span className="text-yellow-400 text-sm">★</span> {tech.rating}
                    </div>
                  </div>

                  <button 
                    onClick={() => addToStack(tech)}
                    disabled={isInStack}
                    className={`w-full text-sm font-medium py-2.5 rounded-lg transition-colors ${
                      isInStack 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-[#111827] hover:bg-black text-white'
                    }`}
                  >
                    {isInStack ? 'Added' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
            <p className="text-xs text-gray-500 mb-6">
              {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            <div className="space-y-3 mb-6">
              {stack.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <img src={tech.image} alt={tech.name} className="w-6 h-6 object-contain" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">{tech.name}</p>
                      <p className="text-[10px] text-gray-500">{tech.category}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromStack(tech.name)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {stack.length === 0 && (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex items-center justify-center min-h-[120px]">
                <p className="text-xs text-gray-400 text-center">Your stack is empty.</p>
              </div>
            )}

            {stack.length > 0 && (
              <button 
                onClick={removeAll}
                className="w-full py-2.5 border border-red-200 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors mt-4"
              >
                Remove All
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AvailableTechnologies;