import { FiPhone } from "react-icons/fi";

const CallButton = () => {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-5 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
    >
      <FiPhone size={24} />
    </a>
  );
};

export default CallButton;
