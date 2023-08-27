import React, { useState } from "react";
import "./DeliveryCardAcc.css";
import CartHead from "../CartHeads.js/CartHead";

const DeliveryCartAccr = (props) => {
  const [openStates, setOpenStates] = useState(props.data.map(() => true));

  const toggle = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className={`w-[55%] border-b-2 border-solid border-grey pb-3 max-[600px]:w-[100%]`}>
      <div className="container">
        <div className="accordion">
          {props.data.map((item, index) => (
            <CartHead
              key={item.id}
              item={item}
              isOpen={openStates[index]}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCartAccr;
