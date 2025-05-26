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
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-16 bg-gradient-to-r from-orange-100 via-white to-orange-50">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-orange-600">
            Ready To Serve...
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-700">
            Discover the best food & drinks and enjoy leisure life!
          </h3>
          <button
            onClick={handleClick}
            className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="mb-6 lg:mb-0">
          <Image
            alt="Chef"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
            src="/assets/Chef.webp"
          />
        </div>
      </div>

      {/* Navigation Cards Section */}
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
