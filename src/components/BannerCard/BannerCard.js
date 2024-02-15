import React from "react";
import Link from "next/link";
import { Search } from "@mui/icons-material";
import "./BannerCard.css";
import Header from "../Header";
import Image from "next/image";

const BannerCard = () => {
  const handleClick = () => {};
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row  h-[600px] items-center bg-[#fff] justify-center">
        <div>
          <Image
            alt=""
            width={200}
            height={200}
            className=""
            src="/assets/Chef.webp"
          ></Image>
        </div>

        <div className="banner relative">
          <div className="bannerHeading">
            <h1>Ready To Serve...</h1>
          </div>
          <div className="bannerPara">
            <h3>Discover the best food & drinks and Enjoy leasure life!!</h3>
          </div>
        </div>
      </div>
      <div className="nav-pages">
        <Link href="/delivery">
          <div className="card-hover" onClick={handleClick}>
            <div className="card-hover__content">
              <h3 className="card-hover__title">
                Order <span>Online</span> Right Now!
              </h3>
              <p className="card-hover__text">
                Order food online with just a few clicks and let the flavors of
                the world come to your doorstep. Savor the joy of delicious
                meals, expertly prepared and delivered with care.
              </p>
            </div>
            <Image
              width={300}
              height={300}
              src="/assets/nightlife.webp"
              alt=""
            />
          </div>
        </Link>
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Dining <span>Seat</span> Book now!
            </h3>
            <p className="card-hover__text">
              Let us gather around the table, raise our glasses, and savor the
              symphony of flavors that bring us together in the timeless ritual
              of dining!
            </p>
          </div>
          <Image width={300} height={300} src="/assets/dining.jpeg" alt="" />
        </div>
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Enjoy <span>NightLife</span> in your Town!
            </h3>
            <p className="card-hover__text">
              In the embrace of the night, we find a sanctuary of liberation,
              where laughter and conversation flow effortlessly, and friendships
              are forged in the depths of the moonlit hours.
            </p>
          </div>
          <Image width={300} height={300} src="/assets/nightlife.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default BannerCard;
