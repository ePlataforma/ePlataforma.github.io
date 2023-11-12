import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import img from "../assets/undraw_new_message_re_fp03 (1).svg";
import { submitMessage } from "../services/api";

export default function MessageUs() {
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    await submitMessage(data);
    setSubmitted(true);
  };

  if (submitted) {
    setTimeout(() => {
      reset();
      setSubmitted(false);
    }, 5000);
  }
  return (
    <>
      <div
        id="fale-conosco"
        className=" bg-[#0D0630] text-white lg:w-full flex justify-between items-center"
      >
        <div className="flex lg: justify-center lg:items-center w-full  h-full  ">
          <div className="hidden lg:flex lg:w-[40%] lg:h-[100vh] justify-center items-center ">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center text-center w-[90vw] lg:w-[50vw] ">
            <h1 className="p-10 font-bold text-5xl">Fale Conosco</h1>
            <h3 className="text-xl text-center w-[90%] ">
              Na ePlataforma, estamos sempre prontos para ouvir você.
            </h3>
            <h3 className="text-xl text-center w-[80%] pb-10">
              Se você tem alguma pergunta, feedback, ou precisa de assistência,
              não hesite em entrar em contato conosco. Nossa equipe dedicada
              está aqui para ajudar, e estamos comprometidos em fornecer um
              atendimento ágil e eficaz.
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center gap-5"
            >
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="name" className="py-2">
                  Nome:
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="name"
                      className="w-[80vw] lg:w-[30vw] p-3 rounded-2xl text-black"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="phone" className="py-2">
                  Telefone:
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      mask="(99) 99999-9999"
                      type="text"
                      id="phone"
                      className="w-[80vw] lg:w-[30vw] p-3 rounded-2xl text-black"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="email" className="py-2">
                  Email:
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id="email"
                      className="w-[80vw] lg:w-[30vw] p-3 rounded-2xl text-black"
                    />
                  )}
                />
              </div>

              <div className="flex flex-col justify-center items-start">
                <label htmlFor="email" className="py-2">
                  Mensagem:
                </label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="textarea"
                      id="email"
                      className="w-[80vw] lg:w-[30vw] p-3 rounded-2xl text-black"
                    />
                  )}
                />
              </div>
              {submitted ? (
                <p className="text-center">
                  Obrigado pela sua mensagem! Nós entraremos em contato em
                  breve.
                </p>
              ) : (
                <div className="py-10 flex justify-center items-center ">
                  <button
                    type="submit"
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:scale-110 hover:bg-slate-100"
                  >
                    Enviar
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
