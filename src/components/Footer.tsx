import NowPlaying from './now-playing';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='pt-2 pb-14 border-t'>
      <div className='container'>
        <NowPlaying />
        <div className='text-muted-foreground'>
          <p>© 2024 Fadlan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
