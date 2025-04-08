import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Porque Elegir Hugos bar?
        </h1>
        <p>
        Hugo’s Bar nació con una idea sencilla: crear un lugar donde la buena comida, las bebidas con personalidad y el ambiente acogedor se encuentren en perfecta armonía. Somos más que un restaurante, somos un punto de encuentro para amigos, familias y amantes del buen comer.

Desde el primer día, nos hemos enfocado en ofrecer sabores auténticos, ingredientes frescos y una atención que te haga sentir como en casa. Ya sea que vengas por unas tapas para compartir, una cerveza artesanal bien fría o una cena completa para celebrar, en Hugo’s Bar siempre encontrarás algo para disfrutar.

 </p>
        <p>
        Con un toque urbano, un espíritu relajado y el sabor que deja huella, queremos que cada visita sea una experiencia memorable. Porque aquí, cada plato tiene una historia, y cada cliente es parte de la nuestra.
       
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Mostrar Mas" />
        </div>
      </div>
    </div>
  );
};

export default About;