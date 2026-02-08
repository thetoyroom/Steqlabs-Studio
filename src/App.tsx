import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Services } from '@/components/sections/Services';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Method } from '@/components/sections/Method';
import { Footer } from '@/components/layout/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
      <Helmet>
        <title>STEQLABS | Conversion Engineering</title>
        <meta name="description" content="We engineer high-performance websites for founders who value brand equity and conversion data. Design for revenue." />
        <meta property="og:title" content="STEQLABS | Conversion Engineering" />
        <meta property="og:description" content="Digital product studio engineering brands for the next decade." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Method />
        <SelectedWork />
      </main>
      <Footer />
    </div>
  );
}

export default App;