//COMPONENTS
import Base from "../components/container/base";
import Hero from "../components/hero";
import Logos from "../components/panel/logos";
import Cards from "../components/panel/cards";

export default function Home() {
  return (
    <div>
      <Base>
        <Hero />
        <Logos />
        <Cards/>
      </Base>
    </div>
  );
}
