import { createLazyFileRoute } from "@tanstack/react-router";

import Services from "../components/Services";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import CleaningServices from "../components/CleaningServices";
import GetBudget from "../components/GetBudget";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Banner />
      <Services />
      <AboutUs />
      <CleaningServices />
      <GetBudget />
      <Contact />
      <Footer />
    </>
  );
}
