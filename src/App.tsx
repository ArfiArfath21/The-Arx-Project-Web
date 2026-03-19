import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import CoreBehaviours from "./components/CoreBehaviours";
import Closing from "./components/Closing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <CoreBehaviours />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
