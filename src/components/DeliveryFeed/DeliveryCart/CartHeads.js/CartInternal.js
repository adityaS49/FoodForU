import Image from "next/image";
import { React } from "react";
import { CurrencyRupee, Star } from "@mui/icons-material";
import AddButton from "./AddButton";
import styles from "./Cartinternal.module.css";

const CartInternal = ({ t }) => {
  return (
    <>
      <div
        key={t.id}
        className={`flex pb-6 pt-4 border-b-2 border-solid border-[#bdbcbc] mb-1 justify-between`}
      >
        <div className={`pl-2`}>
          <div className={`flex items-center gap-1`}>
            <span>
              <Image width={10} height={10} alt="img" src={t.FoodState} />
            </span>
            <span
              className={`text-sm font-semibold flex items-center text-[#f6be3c]`}
            >
              <Star style={{ fontSize: "16px" }} />
              {t.seller}
            </span>
          </div>
          <div className={`flex gap-1 font-medium`}>
            <span>
              <h3>{t.name}</h3>
            </span>
            <span className="Quantity">
              <h3>{t.quantity}</h3>
            </span>
          </div>
          <div className={`flex items-center`}>
            <CurrencyRupee style={{ fontSize: "14px" }} />
            <h6 style={{ fontSize: "14px" }}>{t.price}</h6>
          </div>
        </div>
        <div className={`pr-2 relative `}>
          <div className={`border-2  border-solid border-grey rounded `}>
            <Image
              alt="img"
              className="object-cover"
              width={150}
              height={150}
              src={t.imgSrc}
            />
          </div>
          <div className={styles.add}>
            <div>
              <AddButton  v={t} key = {t.id} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartInternal;
