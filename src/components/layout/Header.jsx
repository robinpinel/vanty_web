import { navItems, siteInfo } from "../../data/site";

/**
 * Header component
 * Navigation and branding
 * Uses anchor-based navigation for sections
 */
export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo/Brand */}
        <a href="#hero" className="header__brand">
          <h1 className="header__title">{siteInfo.author}</h1>
        </a>

        {/* Navigation */}
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="nav-list__item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
