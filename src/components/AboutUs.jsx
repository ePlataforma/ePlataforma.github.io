import img from "../assets/dois-homens-felizes-trabalhando-juntos-em-um-novo-projeto-de-negocios.jpg";
import { MdShutterSpeed } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { TbSettingsAutomation } from "react-icons/tb";
import { GiTechnoHeart } from "react-icons/gi";

export default function AboutUs() {
  return (
    <div
      id="sobre-nos"
      className="w-full text-base lg:text-[10px] lg:leading-4 line xl:text-xs py-10 flex flex-col justify-center items-center  lg:flex-row lg:justify-between "
    >
      <img
        src={img}
        className="sm:rounded-xl sm:w-[90%] lg:w-[50%] lg:rounded-r-2xl"
        alt=""
      />
      <div className=" flex flex-col justify-center gap-16 items-center lg:pt-4 pt-14 lg:w-[50%]  lg:flex-row">
        <div className="flex flex-col gap-20">
          <div className="w-80 h-80  lg:w-56 lg:h-56 xl:w-64 xl:h-64 flex flex-col justify-center  items-center  bg-[#32A89C] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-4 rounded-xl relative gap-7 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-300">
            <div className="bg-[#00635A]  flex justify-center items-center rounded-full lg:w-[90px] lg:h-[90px] w-[100px] h-[100px] absolute lg:top-[-40px] top-[-50px]">
              <span className=" text-7xl lg:text-6xl text-white ">
                <MdShutterSpeed />
              </span>
            </div>
            <p className="py-5 text-center">
              Na ePlataforma, temos a missão de impulsionar a transformação
              digital no setor contábil e de serviços especializados.
            </p>
          </div>
          <div className="w-80 h-80  lg:w-56 lg:h-56 xl:w-64 xl:h-64 flex flex-col justify-center items-center bg-[#32A89C] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-4 rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-300">
            <div className="bg-[#00635A] flex justify-center items-center rounded-full lg:w-[90px] lg:h-[90px] w-[100px] h-[100px] absolute lg:top-[-40px] top-[-50px]">
              <span className=" text-7xl lg:text-6xl text-white ">
                <TbSettingsAutomation />
              </span>
            </div>
            <p className="py-5 text-center">
              Temos a visão de criar um ecossistema inovador que simplifica
              processos, automatiza tarefas burocráticas e amplia oportunidades
              de negócios para contadores, prestadores de serviços e empresas
              clientes. Priorizamos a simplicidade, agilidade e segurança em
              cada passo.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="w-80 h-80  lg:w-56 lg:h-56 xl:w-64 xl:h-64 flex flex-col justify-center items-center bg-[#32A89C] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-4 rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-300">
            <div className="bg-[#00635A] flex justify-center items-center rounded-full lg:w-[90px] lg:h-[90px] w-[100px] h-[100px] absolute lg:top-[-40px] top-[-50px]">
              <span className=" text-7xl lg:text-6xl text-white ">
                <AiOutlineSolution />
              </span>
            </div>
            <p className="py-5 text-center">
              O que nos torna únicos é a nossa abordagem abrangente e intuitiva,
              que ajuda contadores a expandir seus serviços e empresas a acessar
              uma variedade de soluções especializadas em um só lugar.
            </p>
          </div>
          <div className="w-80 h-80  lg:w-56 lg:h-56 xl:w-64 xl:h-64 flex flex-col justify-center items-center bg-[#32A89C] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-4 rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-300">
            <div className="bg-[#00635A] flex justify-center items-center rounded-full lg:w-[90px] lg:h-[90px] w-[100px] h-[100px] absolute lg:top-[-40px] top-[-50px]">
              <span className=" text-7xl lg:text-6xl text-white ">
                <GiTechnoHeart />
              </span>
            </div>
            <p className="py-5 text-center">
              Nossa equipe é apaixonada por tecnologia e comprometida em
              fornecer suporte excepcional. Acreditamos que o sucesso de nossos
              clientes é o nosso sucesso, e estamos sempre buscando maneiras de
              melhorar a experiência na nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
