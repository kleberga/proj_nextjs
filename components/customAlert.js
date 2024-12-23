import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-green-500 text-white py-2 px-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="text-white">Fechar</button>
      </div>
    </div>
  );
};

export default CustomAlert;
