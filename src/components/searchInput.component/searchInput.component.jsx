import raect, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import productData from "../../PRODUCTS_DATA";
import { SelectBox,
    SearchInputWrapper,
    Option,
} from "./searchInput.style";

const SearchInput = () => {
  // const { data } = useSelector(({productData}) => productData)
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const allItems = Object.keys(productData).reduce((acc, key) => {
    return [...acc, ...productData[key].items];
  }, []);

  console.log("ronak", searchResult);
  const handleSearch = (value) => {
    setSearchQuery(value);
    value.length?setSearchResult(
      allItems.filter((item) => item.searchTags.includes(value.toLowerCase()))
    ):setSearchResult([])
  };

  return (
    <>
      <SearchInputWrapper>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchQuery}
        />
        <SelectBox>
        {
            searchResult.map(option => {
                return(
                    <Option>
                    <img src={option.img} />
                    <span>
                    {option.name}
                    </span>
                
            </Option>
                )
            })
        }
           
        </SelectBox>
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;
