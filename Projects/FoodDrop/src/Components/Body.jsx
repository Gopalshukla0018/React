import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
// This is the body component which contains the search bar and restaurant cards

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search</div>
      <div className="res-container">
        {/* restaurent card */}
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;