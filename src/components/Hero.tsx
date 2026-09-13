import Logo from "../assets/banner-stack.png"

const Hero = () => {
    return (
         <div className="mt-10 md:mt-30 container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="w-full md:w-1/2 mx-auto text-center md:text-left space-y-6">
                
                <h1 className="text-4xl md:text-6xl font-bold">
                    Build Your Ideal <br /> 
                    <span className="bg-linear-to-l from-purple-700 to-[#F97316] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                     
                <p className="text-gray-600">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <button className="px-4 py-[8.5px] text-white rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899]">
                        Explore Technologies
                    </button>
                
                    <button className="btn btn-outline border-gray-300 px-12 rounded-md py-4">
                        Learn More
                    </button>
                </div>
              
            </div>
       
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={Logo} alt="Development Stack" className="w-3/4 md:w-full max-w-md object-contain" />
            </div>
         </div>
    );
};

export default Hero;