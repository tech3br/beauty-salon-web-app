import Head from 'next/head';

import { Header } from '@/components/Header/header.page';
import { MainCover } from '@/components/MainCover/mainCover.page';

const Index = () => {
  return (
    <>
      <Head>
        <title>Beauty Salon - Home</title>
      </Head>
      <Header />
      <main>
        {/* Main Cover */}
        <MainCover
          heading="Saúde natural para os seus cabelos"
          paragraph="Um salão exclusivo em São Paulo, especializado em tratamentos naturais."
          buttonText="Agendar um  horário"
          imageSrc="/assets/images/mainCover-image.png"
        />
        {/* About Us */}
        {/* Services */}
        {/* Testimonials */}
        {/* Contact */}
        {/* Footer */}
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Index;
