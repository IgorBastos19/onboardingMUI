import CardForm from "../../components/CardForm";

export default function login() {
  return (
    <CardForm
      //Header
      title="Nome"
      subheader="Qual o seu nome?"
      //Conteudo
      fields={[
        {
          name: "name",
          label: "Nome",
          type: "text",
          required: true,
        },
      ]}
      //Ações Botao
      TextoBotao="Avançar"
      HrefBotao="telefone"
      //Ações Sutexto
    ></CardForm>
  );
}
