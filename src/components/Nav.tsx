import Logo from "../assets/logo-text.png"


const Nav = () => {
    return (
         <nav className=" flex justify-between mt-5 container mx-auto">
               <img src={Logo} alt="" />
               <ul className="flex gap-5">
                <li className="text-[#DB2777]"><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                
                
               </ul>

               <div className="flex gap-4 items-center -mt-4">
                   <button >Sign in</button>
                   <button className="btn btn-secondary rounded-2xl text-white">Sign Up</button>
                   
               </div>
        

      </nav> 
    );
};

export default Nav;