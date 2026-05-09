const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={'flex h-[10vh] items-center justify-center'}>
      <div className={'flex gap-2'}>
        <p className={'text-white'}>{`© ${currentYear} Vladimir Antin and`}</p>
        <a
          className={'cursor-pointer font-bold text-white hover:underline'}
          href={'https://pages.github.com'}
          target={'_blank'}
          rel={'noreferrer'}>
          {'github.io'}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
