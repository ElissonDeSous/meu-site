import Elisson from "../../Paginas/Home/img/elisson.jpg"
    export default function ConteudoPrincipal(){
        return(
        <section>
            <div className=" text-white bg-black md:h-[500px] h-[800px] flex flex-wrap  justify-around p-2">
            
                 <div className="flex flex-col flex-wrap justify-center items-center">
                 <img src={Elisson}  className="w-[200px] md:w-[300px] rounded-full px-2" alt="" />
                 <h1 className="text-2xl font-bold text-red-500 md:text-4xl m-2">Elisson De Sousa</h1>
                    <h2 className="text-1xl font-bold text-red-500 md:text-2xl">Engenheiro de Software</h2>
                 </div>
                 <div className="flex items-center ">
                 <p className="m-2 md:w-[500px] w-[300px]">Elisson Sousa dos Santos, 23 anos, é um desenvolvedor front-end com uma paixão por criar interfaces de usuário dinâmicas e intuitivas. Com uma sólida experiência em tecnologias como HTML, CSS e JavaScript, ele se destaca por sua habilidade em transformar ideias de design em experiências digitais interativas e funcionais. Atualmente, está se aprofundando no estudo de back-end, explorando tecnologias como Node.js e bancos de dados como PostgreSQL. Sua meta é se tornar um desenvolvedor full stack completo, integrando suas habilidades de front e back-end para entregar soluções robustas e escaláveis. Além de sua experiência técnica, Elisson está sempre em busca de novos desafios e oportunidades de colaborar em projetos que envolvam inovação e tecnologia.</p>
                 </div>
                    
                    
        
             </div>
    
             
    
      </section>
        )
    }




