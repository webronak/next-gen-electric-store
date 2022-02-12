import raect, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import productData from "../../PRODUCTS_DATA";
import { SelectBox, SearchInputWrapper, Option } from "./searchInput.style";

const SearchInput = () => {
  const { data } = useSelector(({ productData }) => productData);
  let productData = data;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const allItems = Object.keys(productData).reduce((acc, key) => {
    return [...acc, ...productData[key].items];
  }, []);
  

  useEffect(() => {
    searchQuery.length
      ? setSearchResult(
          allItems.filter((item) =>
            item.searchTags.includes(searchQuery.toLowerCase())
          )
        )
      : setSearchResult([]);
  }, [searchQuery]);

  console.log("ronak", searchResult);
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <SearchInputWrapper>
        <div className="position-relative input_box">
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            placeholder="Search..."
          />
          {searchQuery.length ? (
            <i class="fas fa-times" onClick={() => setSearchQuery("")}></i>
          ) : (
            <i className="fas fa-search"></i>
          )}
        </div>
        {searchResult.length ? (
          <SelectBox>
            {searchResult.map((option) => {
              console.log("avndj", option);
              return (
                <Option>
                  <img src={option.img} />
                  <div className="info_container">
                    <span className="item_name">{option.name}</span>
                    <br />
                    <span className="item_desc">{option.desc}</span>
                  </div>
                  <i className="fas fa-caret-right"></i>
                </Option>
              );
            })}
          </SelectBox>
        ) : (
          <></>
        )}
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;
