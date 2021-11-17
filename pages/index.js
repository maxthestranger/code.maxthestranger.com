import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShortcutHome from '../components/ShortcutHome';

export async function getStaticProps() {
  return {
    props: {
      title: 'Max The Stranger',
      description:
        'Learning to be pragmatic in building good software that people love to use',
      image: '/static/images/home-bw.png',
    },
  };
}

function Home(props) {
  const { title, description, image } = props;

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://maxthestranger.com" property="og:url" />
        <meta
          content={`https://maxthestranger.com${image}`}
          property="og:image"
        />
      </Head>

      <Navbar />
      <main className="post main home">
        <div className="post-content">
          <div className="post-container">
            <div className="single">
              <h1>{title}</h1>
              <p>
                <strong>
                  Currently Unemployed as a dev, Music producer on the side
                </strong>
                .
                <br />
                {description}.
              </p>
              <ShortcutHome />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
