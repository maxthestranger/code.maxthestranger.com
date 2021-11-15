import { links } from '../data/footerData';

export default function Footer() {
  return (
    <footer className="footer">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noreferrer">
          <span>{link.title}</span>
          <i className={link.icon} />
        </a>
      ))}
    </footer>
  );
}
