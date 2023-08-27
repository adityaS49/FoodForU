import {React,useState} from "react";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import CartInternal from "./CartInternal";

const CartHead = ({ item, isOpen, onToggle }) => {
  const dropMenu = () => {
    onToggle(item.id);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (itemPrice) => {
    setTotalPrice(prevTotal => prevTotal + itemPrice);
  };
  // console.log(totalPrice);
  return (
    <div className="accordion-item">
      <div className="accordion-link hover:cursor-pointer" onClick={dropMenu}>
        <div>
          <h3>{item.name}</h3>
        </div>
        <div className="toggler">
          <span>
            {isOpen ? (
              <ArrowRight className="icon ion-md-arrow-forward" />
            ) : (
              <ArrowDropDown className="icon ion-md-arrow-down" />
            )}
          </span>
        </div>
      </div>
      <div
        className="answer"
        style={{
          display: isOpen ? "none" : "block",
          padding: "5px",
        }}
      >
        {item.value.map((cartItem) => (
          <CartInternal t={cartItem} key={cartItem.id} updateTotalPrice={updateTotalPrice} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default CartHead;
