import { BsPatchCheckFill } from "react-icons/bs";
import img from "../assets/equipe-trabalhando-juntos-no-projeto.jpg";

export default function Services() {
  return (
    <>
      <div
        id="servicos"
        className="w-full p-10 flex flex-col lg:flex-row justify-center items-center text-center md:text-left gap-10 bg-[#32A89C] text-white "
      >
        <div className="w-[90vw] h-full flex flex-col justify-center items-center">
          <div className="w-[80%] flex flex-col justify-start items-start gap-5">
            <h2 className="font-bold text-5xl">Nossos Serviços</h2>
            <div className="text-2xl">
              Transforme seu escritório de contabilidade com nossa plataforma
              digital:
            </div>
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Conectamos contadores, prestadores de serviços e empresas
                clientes.
              </p>
            </div>
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Acesse uma variedade de serviços e profissionais especializados.
              </p>
            </div>{" "}
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Automatize tarefas burocráticas, liberando tempo para atividades
                de maior valor.
              </p>
            </div>{" "}
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Agilize o atendimento aos clientes.
              </p>
            </div>{" "}
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Aprimore sua competitividade e atraia mais clientes.
              </p>
            </div>{" "}
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Tenha acesso a soluções especializadas.
              </p>
            </div>{" "}
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Oferece acesso a soluções especializadas em diversas áreas.
              </p>
            </div>
            <div>
              <p className="flex justify-center items-center gap-4 text-xl">
                <span className="text-3xl">
                  <BsPatchCheckFill />
                </span>{" "}
                Proporciona uma experiência diferenciada aos clientes, tornando
                o escritório de contabilidade mais atrativo e competitivo.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src={img} alt="" className="w-[500px] rounded-3xl" />
        </div>
      </div>
    </>
  );
}
