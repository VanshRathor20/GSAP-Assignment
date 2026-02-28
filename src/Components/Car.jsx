import React, { forwardRef } from "react";
import car from "../assets/car.png";
const Car = forwardRef((props, ref) => {
  return (
    <img
      ref={ref}
      src={car}
      alt="car"
      className="absolute left-0 top-1/2 -translate-y-1/2 w-72 z-20"
    />
  );
});

export default Car;
