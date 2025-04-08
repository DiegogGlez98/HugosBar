import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
        Disfruta al máximo cada bocado.        </h1>
        <p className=" text-backgroundColor">
        El sabor que une, el lugar que conquista.
Disfruta de buena comida, tragos únicos y el mejor ambiente en un solo lugar.
¡Tu mesa te está esperando!
        </p>
        <div className=" lg:pl-44">
          <Button title="Ordena Ahora" />
        </div>
      </div>
    </div>
  );
};

export default Home;