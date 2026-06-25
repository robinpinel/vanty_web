import { ContactForm } from "./ContactForm";

/**
 * Contact section component
 * Contact information and form
 * Anchor ID: #contact for navigation
 */
export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container container--sm">
        <h2 className="section__title">Contacto</h2>

        <p className="contact__intro text-center">
          ¿Interesado en una obra? ¿Tienes una consulta? <br />
          Me encantaría saber de ti.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
