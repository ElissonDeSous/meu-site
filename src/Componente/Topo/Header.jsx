import { Link } from "react-router-dom"
import Logo from "./img/Logo.png"


export default function Header(){
    return(
        <header className="  text-white bg-[#222222] flex  items-center justify-around lg:h-[100px] ">
            <div>
                <img src={Logo} className="rounded-full" width="100px" alt="" />
            </div>
            <nav className="w-[600px]">
                <ul className="flex justify-around">
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Sobre</Link>
                    </li>
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Projetos</Link>
                    </li>
                 
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}