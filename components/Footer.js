export default function Footer() {
  const links = [
    {
      title: 'Source',
      url: 'https://github.com/maxthestranger/maxthestranger.com',
      icon: 'ri-braces-line',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/maxthestranger',
      icon: 'ri-twitter-line',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/maxthestranger',
      icon: 'ri-github-line',
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/maxthestranger',
      icon: 'ri-linkedin-line',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/max_the_stranger/',
      icon: 'ri-instagram-line',
    },
  ];

  return (
    <footer className="footer">
      {links.map((link, index) => {
        return (
          <a key={index} href={link.url} target="_blank">
            <span>{link.title}</span>
            <i className={link.icon} />
          </a>
        );
      })}
    </footer>
  );
}
