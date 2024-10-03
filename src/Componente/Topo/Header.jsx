import { Link } from "react-router-dom"
import Logo from "./img/Logo.png"
import Linkedin from "./img/linkedin.png"
import Github from "./img/github.png"


export default function Header(){
    return(
        <header className="  text-white bg-[#222222] flex  items-center justify-around lg:h-[100px] ">
            <div>
                <img src={Logo} className="rounded-full" width="100px" alt="" />
            </div>
            <nav className="w-[400px]">
                <ul className="flex justify-around">
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/projeto">Projetos</Link>
                    </li>
                 
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Contato</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center">
                <Link to="https://www.linkedin.com/in/elisson-sousa-dos-sntos-6234b9209/" target="_blank">
                <img src={Linkedin} width="50px" alt="" />
                </Link>
               

                <Link to="https://github.com/ElissonDeSous" target="blank">
                   <img  src={Github} width="100px"  alt="" />
                </Link>
            </div>
        </header>
    )
}