import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({
        text: "",
        type: "",
      });
    }, 3000);
  };

  return {
    message,
    showMessage,
  };
};
