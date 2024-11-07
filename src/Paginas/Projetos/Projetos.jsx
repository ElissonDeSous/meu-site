import projeto1 from "./img/projeto1.jpg"
import projeto2 from "./img/projeto2.jpg"





export default function Projetos(){
    return(
       <div className=" bg-black text-white lg:flex flex flex-col justify-center items-center">
        <h1 className="mt-20 text-2xl md:text-5xl">Meus projetos</h1>
           <div className="mt-20 lg:grid text-black lg:grid-cols-2  lg:w-[900px] flex flex-col">

              <div className="h-[400px] text-black flex flex-col items-center  mb-6 w-[400px] bg-white">
              <img src={projeto1} width="400px" alt="" />

              <h2 className="font-bold">Israel advogados</h2>
              <p className="w-[350px]"> </p>
              </div>

              <div className="h-[400px] flex flex-col items-center mb-7 font-bold w-[400px] bg-white ">
              <img src={projeto2} width="400px" alt="" />
              <h1>Hamburgueria</h1>
              </div>
              <div className="  h-[400px] mb-7  w-[400px] bg-gray-300">

              </div>
              <div className="h-[400px] mb-7  w-[400px] bg-gray-300">

              </div>
              <div className="h-[400px] mb-7  w-[400px] bg-gray-300">

              </div>
           </div>
       </div>
    )
}