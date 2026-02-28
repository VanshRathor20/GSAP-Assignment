import React, { forwardRef } from "react";
import BlueCard from "./BlueCard";
import GreyCard from "./GreyCard";
import OrangeCard from "./OrangeCard";
import YellowCard from "./YellowCard";


const StatsCard = forwardRef((ref) => {
  return (
    <div
      ref={ref}
      
    >
      <YellowCard />
      <BlueCard />
      <GreyCard />
      <OrangeCard />
    </div>
  );
});

export default StatsCard;
