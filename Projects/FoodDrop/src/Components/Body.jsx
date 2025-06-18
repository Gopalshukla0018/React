import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
// This is the body component which contains the search bar and restaurant cards

const Body = () => {
  const [Listofrestaurant, setListofrestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListofrestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if(Listofrestaurant.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = Listofrestaurant.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListofrestaurant(filteredList);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {/* restaurent card */}
        {Listofrestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
