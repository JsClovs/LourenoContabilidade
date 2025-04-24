import { Link } from "react-router-dom";
import LogoIMG from '../assets/LogoIMG.png';

function NavBar() {
   return (
       
           <header>
              <div className="flex justify-between items-center bg-gray-950 p-2 px-20">
                 <a href="/" >
                    <img
                        src={LogoIMG}
                        alt="Logo Principal Do Loureno Contabilidade"
                        className="w-10"
                    />
                 </a>
                 <nav className="text-white flex gap-3 text-lg ">
                     <p className="hover:text-black hover:bg-amber-200 hover:font-bold hover:px-2 hover:underline ease-in-out duration-300 cursor-pointer">
                         <Link to="/">Home</Link>
                     </p>
                     <p className="hover:text-black hover:bg-amber-200 hover:font-bold hover:px-2 hover:underline ease-in-out duration-300 cursor-pointer">
                         <Link to="Blog">Postagens</Link>
                     </p>
                     <p className="hover:text-black hover:bg-amber-200 hover:font-bold hover:px-2 hover:underline ease-in-out duration-300 cursor-pointer">
                         <Link to="About">Sobre</Link>
                     </p>
                 </nav>
                 <p className="text-white text-lg hover:bg-amber-200 hover:font-bold hover:px-2 hover:underline duration-300 cursor-pointer">Contatos</p>
              </div>
              <div className="text-center flex justify-between text-black bg-amber-300 px-5 py-1">
                   <p >Loureiro Contabilidade</p>
                   <div className="flex gap-2 items-center">
                      <p>+55 88 99999-9999</p>
                      <p>+55 88 99999-9999</p>
                   </div>
              </div>
           </header>
   );
}

export default NavBar;