import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Reviews de los Clientes
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Karla Gascon" txt1="“Desde que entras a Hugo’s Bar, te sientes bienvenido. El ambiente es cálido, las instalaciones impecables y la decoración le da un toque muy especial. Probé varias cosas del menú y todo estaba buenísimo. Lo mejor: el personal es atento y servicial, no tardaron nada en atendernos“"/>
        <ReviewCard img={img2} name="Juan Perez" txt1="“Fuimos en familia y quedamos encantados. Los platillos estaban increíbles, y se nota que usan ingredientes de calidad. El lugar es amplio, muy limpio y bien cuidado, ideal para pasar un rato agradable. Además, el trato del personal fue excelente. ¡Lo recomiendo al 100%!”"/>
        <ReviewCard img={img3} name="Victoria Zoe" txt1="“¡Una joya de lugar! La comida está deliciosa, todo con mucho sabor y bien presentado. El servicio fue rápido y súper amable, se nota que les importa que tengas una buena experiencia. Además, el lugar es muy bonito y perfecto para venir con la familia. ¡Sin duda volveré!”"/>
      </div>
    </div>
  );
};

export default Review;