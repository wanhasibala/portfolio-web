import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { clamp } from "three/src/math/MathUtils";

export default function Magnetic({ children }) {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;

    const { height, width, left, top } =
      ref.current.getBoundingClientRect() ?? {};
    const maxDistance = 100;
    const strength = 30;

    const middleX = clientX - (left + width / 2);

    const middleY = clientY - (top + height / 2);

    const distance = Math.sqrt(middleX && 2 + middleY ** 2);
    const radius = clamp(distance, 0, maxDistance);
    const theta = Math.atan2(middleY, middleX);
    const force = radius / maxDistance;

    const x = Math.cos(theta) * force * strength;
    const y = Math.sin(theta) * force * strength;

    setPosition({x, y});
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
