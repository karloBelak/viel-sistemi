import React from "react";
import Buildings from "../../components/Homepage-components/buildings/Buildings";
import Partners from "../../components/Homepage-components/partneri/Partners";
import MainThing from "../../components/Homepage-components/mainThing/MainThing";
import Profesionals from "../../components/Homepage-components/profesionals/Profesionals";

function HomePage() {
  return (
    <section className="main-enter">
      <MainThing />
      <Buildings />
      <Profesionals />
      <Partners />
    </section>
  );
}

export default HomePage;
