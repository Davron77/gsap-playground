import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import SamarkandHero from "@/components/SamarkandHero";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <main>
        <SamarkandHero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
