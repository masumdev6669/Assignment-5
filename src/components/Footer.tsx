import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="container mx-auto px-4 py-10 mt-10">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                
                {/* Left Section */}
                <div className="w-full md:w-1/3">
                    <img src={Logo} alt="Dev Stack Logo" className="w-32" />
                    <p className="mt-4 text-gray-600 text-sm">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <ul className="flex gap-5 mt-5 font-semibold text-sm">
                        <li><a href="">Github</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>

                {/* Right Section*/}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-2/3 md:justify-items-end">
                    
                    <div className="space-y-3">
                        <h1 className="font-bold text-sm tracking-wider">PRODUCTS</h1>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold text-sm tracking-wider">COMPANY</h1>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Carrers</a></li>
                        </ul>
                    </div>
                    
                    <div className="space-y-3">
                        <h1 className="font-bold text-sm tracking-wider">LEGAL</h1>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;