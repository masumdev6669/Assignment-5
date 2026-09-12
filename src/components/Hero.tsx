import Logo from "../assets/banner-stack.png"

const Hero = () => {
    return (

         <div className="mt-30 container mx-auto flex ">
            <div className="text-center items-center mx-0 my-auto space-y-4">
                
                     <h1 className="text-5xl font-bold items-center ">Build Your Ideal <br /> <span className= " bg-linear-to-l from-purple-700 to-[#F97316] rple-700 bg-clip-text text-transparent }">Development Stack</span></h1>
                     
            <p>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits yournext project.

            </p>
            <div>
                 <button className="px-4 py-[8.5px] text-white rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
                
                  <button className="btn btn-outline ml-5 -mt-1">Learn More</button>

                   
            </div>
              
            </div>
       
            <img src={Logo} alt="" />
         </div>
        

    );
};

export default Hero;