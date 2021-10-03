import sockets from "../../images/categories.images/socket.jpg";
import switches from "../../images/categories.images/switches.jpg";
import coolers from "../../images/categories.images/coolers.jpg";
import bulbs from "../../images/categories.images/bulbs.jpg";
import fans from "../../images/categories.images/fans.jpg";
import holders from "../../images/categories.images/holders.jpg";
import switcDisplayImg from "../../images/display.images/switch.display.png";
import switcDisplayImg2 from "../../images/display.images/switch.display2.png";

const INNITIAL_STATE = {
  data:[],
  isFetching:undefined,
};

const ProductDataReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data:action.payload,
        isFetching:false
      };
    case "START_FETCHING":
      return {
        ...state,
        isFetching:action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductDataReducer;
