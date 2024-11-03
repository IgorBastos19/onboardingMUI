import CardForm from "../components/CardForm";

export default function login() {
  return (
    <CardForm
      //Header
      title="Login"
      subheader="Bem vindo ao melhor app de gestão financeira do Brasil"
      //Conteudo
      fields={[
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
        },
      ]}
      //Ações Botao
      TextoBotao="Logar"
      HrefBotao="dashboard"
      //Ações Sutexto
      SubTextoBotao="Cadastre-se "
      link="aqui."
      Href="register"
    ></CardForm>
  );
}
