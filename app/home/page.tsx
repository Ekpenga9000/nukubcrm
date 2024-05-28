import React from 'react'; 
import NavBar from '@/components/NavBar';
import Hero from '@/components/hero';
import Benefits from '@/components/benefits';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/Footer';
import Crmexplanation from '@/components/crmexplanation';

const HomePage = () => {
  return (
      <section>
      <NavBar />
      <Hero />
      <Benefits />
      <Crmexplanation/>
      <Newsletter />
      <Footer/>
    </section>
  )
}

export default HomePage;