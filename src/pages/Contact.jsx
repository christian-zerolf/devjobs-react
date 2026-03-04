import { Title } from "../components";

export function Contact() {
  const title = `Contact us`;
  return (
    <div>
      <Title text={title} />
      <h1>📧 Contacto</h1>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
    </div>
  );
}
