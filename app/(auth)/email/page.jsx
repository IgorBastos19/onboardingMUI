import CardForm from "../../components/CardForm";

export default function login() {
  return (
    <CardForm
      //Header
      title="Email"
      subheader="Qual o seu email?"
      //Conteudo
      fields={[
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
      ]}
      //Ações Botao
      TextoBotao="Avançar"
      HrefBotao="dashboard"
      //Ações Sutexto
    ></CardForm>
  );
}
