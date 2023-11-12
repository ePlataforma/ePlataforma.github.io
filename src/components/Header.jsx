import { useEffect } from "react";
import logo from "../assets/ePlataforma.png";
import img from "../assets/os-jovens-concentraram-a-mulher-de-negocios-nos-vidros-e-na-camisa-listrada-que-trabalham-com-papeis-em-casa.jpg";


export default function Header() {
  useEffect(() => {
    new FinisherHeader({
      count: 6,
      size: {
        min: 1,
        max: 334,
        pulse: 0.1,
      },
      speed: {
        x: {
          min: 0,
          max: 0.1,
        },
        y: {
          min: 0,
          max: 0.1,
        },
      },
      colors: {
        background: "#32a89c",
        particles: ["#00635a", "#44e3d3", "#ff5a5f", "#0d0630"],
      },
      blending: "lighten",
      opacity: {
        center: 0.05,
        edge: 0.3,
      },
      skew: 0,
      shapes: ["c"],
    });
  }, []);

  return (
    <div
      id="home"
      className="header finisher-header w-full flex h-full px-5 justify-between text-white  pb-10"
    >
      {/* <div className="hidden absolute  bottom-3 text-5xl md:flex justify-center text-slate-200 animate-bounce">
        <PiCaretDownLight />
      </div> */}
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-center lg:justify-between items-center border-b py-5">
          <div className="flex-col lg:flex-row flex items-center justify-center">
            <img src={logo} className="h-24 w-24" alt="" />
            <p className="text-5xl lg:text-4xl font-normal">ePlataforma</p>
          </div>
          <div className=" hidden xl:flex lg:gap-5 font-semibold">
            <div className=" hidden xl:flex lg:gap-5 font-semibold">
              <a href="#home">
                <h3>Home</h3>
              </a>
              <a href="#sobre-nos">
                <h3>Sobre Nós</h3>
              </a>
              <a href="#servicos">
                <h3>Serviços</h3>
              </a>
              <a href="#fale-conosco">
                <h3>Fale Conosco</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center w-[80%] h-full text-2xl gap-10 text-left leading-relaxed">
          <h1 className="font-bold text-3xl xl:text-5xl  leading-loose text-center lg:text-left">
            Transforme o seu negócio contábil com a{" "}
            <span className="bg-[#00635A] opacity-7 px-2 rounded-lg hover:bg-[#14413c] transition-all duration-300">
              ePlataforma!
            </span>
          </h1>
          <div className="flex flex-col text-center lg:text-left">
            <p>
              Descubra novas oportunidades, simplifique processos e aumente sua
              renda com a nossa solução inovadora e abrangente.
            </p>
            <h2>
              Pronto para elevar o seu escritório contábil a um novo patamar?
            </h2>
            <a href="https://app.eplataforma.com.br" target="_blank" rel="noreferrer">
              <button className="w-full max-w-[500px] p-3 mt-12 bg-[#0D0630] rounded-lg font-bold hover:bg-[#261d52] hover:shadow-xl hover:scale-105  transition-all duration-300">
                Aumente Sua Renda!
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[700px] h-[700px] bg-white rounded-[100%_0%_36%_64%/_49%_60%_40%_51%] overflow-hidden">
        <div className="h-full w-full bg-yellow-300 ">
          <img src={img} className="w-full h-full object-cover opacity-90" />
        </div>
      </div>
    </div>
  );
}
