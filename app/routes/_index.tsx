import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import About from "~/components/About";
import Pricing from "~/components/Pricing";
import Contact from "~/components/Contact";

export const meta: MetaFunction = () => {
  return [{ title: "KeDa" }, { name: "description", content: "Keda" }];
};

export default function Index() {
  return (
    <div className="font-sans p-4 max-w-7xl mx-auto">
      <Header />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}
