import React, { useEffect, useState } from "react";
import { Filters } from "./Filters";
import "./deliveryfilter.css";
import { ArrowRightAlt, CurrencyRupeeOutlined, Star } from "@mui/icons-material";

const DeliveryFilter = ({ filterValueSelected }) => {
  const [showRating, setShowRating] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterValueSelected(selectedFilters);
    console.log(selectedFilters);
  }, [selectedFilters, filterValueSelected]);

  const handleRatingTabClick = (e) => {
    if (e.target.tagName === "SPAN") {
      setShowRating(false);
    } else {
      setShowRating(!showRating);
    }
  };

  const handleCostTabClick = (e) => {
    if (e.target.tagName === "SPAN") {
      setShowCost(false);
    } else {
      setShowCost(!showCost);
    }
  };

  return (
    <div className="filters">
      <div className="filterTab">
        Apply Filters <ArrowRightAlt />
      </div>
      <div>
        {Filters.map((f) =>
          f.rating.map((r,i) => (
            <div  className={`flex flex-col relative `} key={i}>
              <div className="ratingTab" onClick={handleRatingTabClick}>
                <h3>Rating</h3>
              </div>
              {showRating && (
                <div
                  className={`flex flex-col bg-[#000] text-white absolute top-[40px] left-3 z-10`}
                  onClick={handleRatingTabClick}
                >
                  <span
                    className={selectedFilters.includes(r.rating1) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(r.rating1)}
                  >
                    {r.rating1}
                    <Star style={{ fontSize: "14px" }} /> +
                  </span>
                  <span
                    className={selectedFilters.includes(r.rating2) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(r.rating2)}
                  >
                    {r.rating2}
                    <Star style={{ fontSize: "14px" }} />+
                  </span>
                  <span
                    className={selectedFilters.includes(r.rating3) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(r.rating3)}
                  >
                    {r.rating3}
                    <Star style={{ fontSize: "14px" }} />+
                  </span>
                  <span
                    className={selectedFilters.includes(r.rating4) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(r.rating4)}
                  >
                    {r.rating4}
                    <Star style={{ fontSize: "14px" }} />+
                  </span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div>
        {Filters.map((g) =>
          g.cost.map((c) => (
            <div className={`flex flex-col relative `} key={g.id}>
              <div className="costPerPerson" onClick={handleCostTabClick}>
                <h3>Cost/Person</h3>
              </div>
              {showCost && (
                <div key={g.id}
                  className={`flex flex-col bg-[#000] text-white absolute top-[40px] z-10`}
                  onClick={handleCostTabClick}
                >
                  <span
                    className={selectedFilters.includes(c.cost1) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(c.cost1)}
                  >
                    <CurrencyRupeeOutlined style={{ fontSize: "16px" }} />
                    {c.cost1}/Person
                  </span>
                  <span
                    className={selectedFilters.includes(c.cost2) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(c.cost2)}
                  >
                    <CurrencyRupeeOutlined style={{ fontSize: "16px" }} />
                    {c.cost2}/Person
                  </span>
                  <span
                    className={selectedFilters.includes(c.cost3) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(c.cost3)}
                  >
                    <CurrencyRupeeOutlined style={{ fontSize: "16px" }} />
                    {c.cost3}/Person
                  </span>
                  <span
                    className={selectedFilters.includes(c.cost4) ? "active" : ""}
                    onClick={() => handleFilterButtonClick(c.cost4)}
                  >
                    <CurrencyRupeeOutlined style={{ fontSize: "16px" }} />
                    {c.cost4}/Person
                  </span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DeliveryFilter;
