const Contacto = () => {
    return (
      <section className="bg-black text-white rounded-t-3xl py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Formulario de contacto */}
          <form className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Enviar
            </button>
          </form>
  
          {/* Mapa de Google */}
          <div className="w-full h-96 rounded overflow-hidden shadow-lg">
            <iframe
              title="Ubicación del restaurante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.7792556955287!2d-104.77686659999999!3d24.527719599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869a3d5416595557%3A0xe0ab7e9f144b7ba9!2sHugo&#39;s%20Restaurante%20%26%20Bar!5e0!3m2!1ses!2smx!4v1744123562736!5m2!1ses!2smx"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contacto;
  