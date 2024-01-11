import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contato = () => {
  const [mensagem, setMensagem] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (nome, email, mensagem) => {
    console.log(nome, email, mensagem);
  };

  console.log(mensagem);

  return (
    <section
      id="contato"
      className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-semibold text-white">
        Vamos trabalhar <span className="text-cor3-0">juntos</span>!
      </h1>
      <div className="w-40 h-1 bg-cor2-0 m-8"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-1/2"
      >
        <input
          type="text"
          name="nome"
          {...register("nome", {
            required: true,
            maxLength: 255,
            minLength: 3,
          })}
        />
        <input
          type="email"
          placeholder="Insira seu Email"
          {...register("email", {
            required: true,
            maxLength: 255,
            minLength: 5,
          })}
        />
        {errors.email?.type === "required" ? (
          <span className="text-xs text-red-500 ">Email é obrigatório</span>
        ) : null}
        {errors.email?.type === "minLength" ? (
          <span className="text-xs text-red-500 ">
            O email precisa ter pelo menos cinco caracteres
          </span>
        ) : null}
        <textarea
          name="mensagem"
          id="mensagem"
          className="min-w-1/2 h-1/2"
          {...register("mensagem")}
          onChange={(event) => setMensagem(event.target.value)}
          value={mensagem}
        />
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
};
