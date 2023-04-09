import Head from 'next/head';

import { AboutUs } from '@/components/AboutUs/AboutUs.page';
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
        <AboutUs
          heading="Sobre nós"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 

          In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 

          Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus."
          imageSrc="/assets/images/about-us-image.png"
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
