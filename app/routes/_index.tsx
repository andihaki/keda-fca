import type { MetaFunction } from "@remix-run/node";

import shape1 from "/app/assets/about-shape1.svg";
import Header from "~/components/Header";
import About from "~/components/About";
import Pricing from "~/components/Pricing";
import Contact from "~/components/Contact";

export const meta: MetaFunction = () => {
  return [{ title: "KeDa" }, { name: "description", content: "Keda" }];
};

export default function Index() {
  return (
    <div className="font-sans max-w-7xl mx-auto relative">
      <img src={shape1} alt="shape" className="absolute -top-12 -left-12" />
      <Header />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}
