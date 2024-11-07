import { Link } from "react-router-dom"
import Logo from "./img/Logo.png"
import Linkedin from "./img/linkedin.png"
import Github from "./img/github.png"

export default function Header(){

    
    function menu(){
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden")

    }
    return(
        <header className="  text-white bg-[#222222] flex  items-center justify-around lg:h-[100px] ">
        <div >
            <div className="">
                <img src={Logo} className="rounded-full md:flex hidden" width="100px" alt="" />
            </div>
        </div>
           
            <nav className="w-[500px] flex justify-around">
             
                <ul className="md:flex hidden md:w-[500px] justify-around w-[200px] ">
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

                <div className="flex justify-around">
                <div className="relative right-[50px] top-3">
                <img src={Logo} className="rounded-full lg:hidden" width="100px" alt="" />
                </div>
                <div>
                  <div className="relative left-20 md:hidden border-solid border-2 border-black flex justify-center items-center w-[100px]">
              <button onClick={menu} className = "">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="128" viewBox="0 0 128 128">
<path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
</svg>
              </button>
          </div>

         <div className="">
         <ul id="menu" className="flex  flex-col md:hidden hidden h-[400px] relative right-8  justify-around items-center  ">
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/projeto">Projetos</Link>
                    </li>
                 
                    <li className="hover:text-red-500 font-bold">
                        <Link to="/">Contato</Link>
                    </li>


                    <div className="flex justify-around items-center w-[200px]">
                <Link to="https://www.linkedin.com/in/elisson-sousa-dos-sntos-6234b9209/" target="_blank">
                <img src={Linkedin} className="w-[30px]" alt="" />
                </Link>
               

                <Link to="https://github.com/ElissonDeSous" target="blank">
                   <img  src={Github} className="w-[50px]" width="100px"  alt="" />
                </Link>
           </div>
                </ul>
         </div>
                  </div>
                
              
        
                </div>     
                  
               
               
            </nav>
           
           
          
      

           
        </header>
    )
}