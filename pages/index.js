import Head from 'next/head';
import Footer from '../components/Footer';

export async function getStaticProps() {
  return {
    props: {
      title: 'Max The Stranger',
      description:
        'Learning to be as pragmatic in building good software that people love to use',
      image: '/static/img/home.bw.jpg',
    },
  };
}

function Home(props) {
  const { title, description, image } = props;

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://code.maxthestranger.com" property="og:url" />
        <meta
          content={`https://code.maxthestranger.com${image}`}
          property="og:image"
        />
      </Head>

      {/* navbar */}

      <main className="post main home">
        <div className="post-content">
          <div className="single">
            <h1>{title}</h1>
            <p>
              <strong>Currently Unemployed</strong>.<br />
              {description}.
            </p>
            {/* shortcut */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
