import React from "react";
import { useNavigate } from "react-router-dom";
import SearchPageHeader from "./SearchPageHeader";
import SearchCardListView from "./SearchPageCardMap";

const SearchResults = ({ setPlant }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setPlant(2);
    navigate("/plantdetail");
  };

  return (
    <div>
      <SearchPageHeader />
      <SearchCardListView setPlant={setPlant} />

      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default SearchResults;
