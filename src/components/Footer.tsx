import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (

        <div className="flex gap-48 container mx-auto space-y-4">
            <div>
                     <img src={Logo} alt="" />

                     <p className="mt-4">Curated tools, technologies, and resources for developers building modern software.</p>
                     <ul className="flex gap-5 mt-5 font-semibold">
                        <li><a href="">Github</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Linkedin</a></li>
                     </ul>
            </div>

          

            <div className="space-y-2.5">
                  <h1 className="font-bold">PRODUCTS</h1>
                  <ul className="space-y-2.5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                  </ul>
                

            </div>

            <div className="space-y-2.5">
                  <h1 className="font-bold">COMPANY</h1>
                  <ul className="space-y-2.5">
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Carrers</a></li>
                  </ul>
                

            </div>
            
            <div className="space-y-2.5">
                  <h1 className="font-bold">LEGAL</h1>
                  <ul className="space-y-2.5">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>

                  </ul>
                

            </div>

        </div>
    );
};

export default Footer;