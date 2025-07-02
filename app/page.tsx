import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import ImageAnimation from "@/components/ImageAnimation";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <main>
        <ImageAnimation />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
