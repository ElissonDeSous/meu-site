import html from "./img/html.webp"
import css from "./img/css.png"
import js from "./img/js.png"
import React from "./img/react.png"
import Node from "./img/node.jpg"
import Ts from "./img/typescript.png"
import Postgres from "./img/postgres.png"

export default function Conteudo2(){
    return(
        <div className="bg-[#181C14] lg:h-[500px] flex flex-col justify-around items-center">
            <h1 className="text2xl lg:text-5xl text-2xl text-center m-7 font-bold text-white ">Tecnologias Utilizadas</h1>
           <div className="flex lg:flex-row flex-wrap flex-col justify-around lg:w-[900px] ">
              <div className="">
                  <img src={html} className="w-[100px] mt-3 mb-8" alt="" />
              </div>
              <div >
                  <img src={css} className="w-[100px] mb-8 " alt="" />
              </div>
              <div className="">
                  <img src={js} className="w-[100px] mb-5 " alt="" />
              </div>
              <div>
                  <img src={React} className="w-[100px] mb-8" alt="" />
              </div>
              <div>
                  <img src={Node} className="w-[100px] mb-8" alt="" />
              </div>
              <div className="text-center text-white font-bold">
                  <img src={Ts} className="w-[100px] " alt="" />
                  <p className="pt-1">TypeScript</p>
              </div>
              <div >
                  <img src={Postgres} className="w-[100px] " alt="" />
       
              </div>
           </div>
        </div>
    )
}