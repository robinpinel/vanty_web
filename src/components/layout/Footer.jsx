import { siteInfo, navItems, socialLinks  } from "../../data/site";

/**
 * Footer component
 * Copyright, links and contact information
 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand section */}
        <div className="footer__section">
          <h2 className="footer__title">{siteInfo.author}</h2>
          <p className="footer__subtitle">{siteInfo.description}</p>
        </div>

        {/* Navigation links */}
        <nav className="footer__nav" aria-label="Navegación secundaria">
          <ul className="footer__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="footer__social" aria-label="Redes sociales">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <SocialIcon name={social.name} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {siteInfo.year} {siteInfo.author}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"    
      focusable="false"
        className="footer__social-icon"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="footer__social-icon"
    >
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25Zm5-2.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.5Z" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === 'Facebook') return <FacebookIcon />;
  if (name === 'Instagram') return <InstagramIcon />;
  return null;
}
