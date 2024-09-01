import { Link } from "react-router-dom"
import Logo from "./img/logo.jpg"


export default function Header(){
    return(
        <header className=" text-white bg-[#343131] flex items-center justify-around h-[100px] border-2 border-solid border-black">
            <div>
                <h1 className="text-3xl">Elisson <span className="text-red-600">De Sousa</span> </h1>
            </div>
            <nav className="w-[600px]">
                <ul className="flex justify-around">
                    <li className="hover:text-red-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-red-500">
                        <Link to="/">Sobre</Link>
                    </li>
                    <li className="hover:text-red-500">
                        <Link to="/">Planos</Link>
                    </li>
                    <li className="hover:text-red-500">
                        <Link to="/">Serviços</Link>
                    </li>
                    <li className="hover:text-red-500">
                        <Link to="/">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}