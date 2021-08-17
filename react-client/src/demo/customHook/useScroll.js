import { useState, useEffect } from "react";

const getPosition = () => ({
  x: document.body.scrollLeft,
  x: document.body.scrollRight,
});

const useScroll = () => {
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(getPosition());
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return position;
};

const TestUseScroll = () => {
	const position = useScroll();
};

export default TestUseScroll;
