import CardForm from "../../components/CardForm";

export default function login() {
  return (
    <CardForm
      //Header
      title="Telefone"
      subheader="Qual o seu telefone?"
      //Conteudo
      fields={[
        {
          name: "telefone",
          label: "Telefone",
          type: "text",
          required: true,
        },
      ]}
      //Ações Botao
      TextoBotao="Avançar"
      HrefBotao="email"
      //Ações Sutexto
    ></CardForm>
  );
}
