import Logo from "../assets/logo-text.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mt-5 container mx-auto px-4">
      <img src={Logo} alt="Dev Stack Logo" className="w-32" />

      <ul className="hidden md:flex gap-5">
        <li className="text-[#DB2777]"><a href="">Home</a></li>
        <li><a href="">Technologies</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      {/* Desktop Buttons (Hidden on mobile) */}
      <div className="hidden md:flex gap-4 items-center">
        <button>Sign in</button>
        <button className="btn btn-secondary rounded-2xl text-white">Sign Up</button>
      </div>

      {/* Mobile Menu Button (Hidden on desktop) */}
      <button className="md:hidden text-2xl text-gray-700">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Nav;