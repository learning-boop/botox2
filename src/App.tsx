import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import ConditionsExperience from "./components/ConditionsExperience";
import TreatmentStories from "./components/TreatmentStories";
import DoctorSection from "./components/DoctorSection";
import ResultsGallery from "./components/ResultsGallery";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <ConditionsExperience />
        <TreatmentStories />
        <DoctorSection />
        {/* <ResultsGallery /> */}
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
