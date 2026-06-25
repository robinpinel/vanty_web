import emailjs from "@emailjs/browser";
import { useState } from "react";

/**
 * Contact form component
 * Form for inquiries about artworks or general contact
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [feedback, setFeedback] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedback({
        type: "error",
        message: "Completa todos los campos antes de enviar el mensaje."
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message: "Falta configurar EmailJS. Añade VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY."
      });
      return;
    }

    setIsSending(true);
    setFeedback(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: import.meta.env.VITE_CONTACT_EMAIL || "tu@email.com"
        },
        publicKey
      );

      setFormData({ name: "", email: "", subject: "", message: "" });
      setFeedback({
        type: "success",
        message: "Gracias por tu mensaje. Se ha enviado correctamente."
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: "No se pudo enviar el mensaje. Revisa la configuración de EmailJS."
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="form-input"
        />
      </div>

      <button type="submit" className="btn btn--primary" disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar mensaje"}
      </button>

      {feedback && (
        <p className={`form-feedback ${feedback.type === "error" ? "form-feedback--error" : ""}`} role="status">
          {feedback.message}
        </p>
      )}
    </form>
  );
}
