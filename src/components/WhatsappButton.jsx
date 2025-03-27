import wpp from '../assets/img/wpp.png'
const WhatsAppButton = () => {
    return (
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      >
        <img src={wpp} alt="WhatsApp" className="w-8 h-8" />
      </a>
    );
  };
  
  export default WhatsAppButton;