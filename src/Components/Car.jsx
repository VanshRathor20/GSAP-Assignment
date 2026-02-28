import React, { forwardRef } from "react";
import car from "../assets/car.png";
const Car = forwardRef((props, ref) => {
  return (
    <img
      ref={ref}
      src={car}
      alt="car"
      className="absolute left-0 top-2/5 -translate-y-[60%] w-90 z-20"
    />
  );
});

export default Car;
