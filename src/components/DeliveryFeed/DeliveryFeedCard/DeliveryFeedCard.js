import { CurrencyRupee, Star } from "@mui/icons-material";
import React, { useContext } from "react";
import "./deliveryFeedCard.css";
import {AppContext} from "@/components/Context/AppContext";
import Link from "next/link";
const DeliveryFeedCard = ({ u }) => {
const context  = useContext(AppContext);

  function changeId(id) {
    context.setIdContext(id);
  }

  console.log(u);
  return u.map((item) => (
    <Link href="/addCart">
      <div
        className="deliveryCard"
        onClick={() => changeId(item.id)}
        key={item.id}
      >
        <div className="deliveryCardImage">
          <img src={item.restraImgSrc} alt="" />
        </div>
        <div className="saleOff">{item.sale}% off</div>
        <div className="deliveryCardTitle">
          <div className="cardTitle">{item.name}</div>
          <div className="rating">
            {item.rating} <Star style={{ fontSize: "10px" }} />
          </div>
        </div>
        <div className="cardDetails">
          <div className="cardDetail">{item.details}</div>
          <div className="cardPrice">
            <p>
              <CurrencyRupee style={{ fontSize: "16px" }} />
              <span>{item.price}</span> for one
            </p>
          </div>
        </div>
        <div className="timing">
          Delivery in <span> {item.time}</span> minutes
        </div>
      </div>
    </Link>
  ));
};
export default DeliveryFeedCard;
