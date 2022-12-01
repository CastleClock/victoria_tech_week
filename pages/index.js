
//COMPONENTS
import Base from "../components/container/base";
import Hero from "../components/hero";
import Logos from "../components/panel/logos";
import Cards from "../components/panel/cards";
import Split from "../components/panel/split";
import FAQ from "../components/panel/faq";
import Hosting from "../components/panel/hosting";

export default function Home() {
  return (
    <div>
      <Base>
        <Hero />
        <Logos />
        <Cards />
        <Split>
          <FAQ />
          <Hosting />
        </Split>
      </Base>
    </div>
  );
}
