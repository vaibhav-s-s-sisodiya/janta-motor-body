import Footer from "../Footer";
import Header from "../Header";
import Hero from "./Hero";
import OurFeaturedModels from "./OurFeaturedModels";
import OurRecentWork from "./OurRecentWork";
import OurSatisfiedClients from "./OurSatisfiedClients";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <OurFeaturedModels />
      <OurSatisfiedClients />
      <OurRecentWork />
      <Footer />
    </>
  );
}

export default Homepage;
