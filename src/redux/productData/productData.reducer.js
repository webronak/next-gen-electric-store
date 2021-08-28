import sockets from '../../images/categories.images/socket.jpg';
import switches from '../../images/categories.images/switches.jpg';
import coolers from '../../images/categories.images/coolers.jpg';
import bulbs from '../../images/categories.images/bulbs.jpg';
import fans from '../../images/categories.images/fans.jpg';
import holders from '../../images/categories.images/holders.jpg';
import switcDisplayImg from '../../images/display.images/switch.display.png';
import switcDisplayImg2 from '../../images/display.images/switch.display2.png';



const INNITIAL_STATE = {
  sockets: {
    img: sockets,
    items: [],
  },
  switches: {
    img: switches,
    displayImg: [switcDisplayImg, switcDisplayImg2],
    items: [
      {
        _id: 1,
        name: "carryon socket",
        desc: "16-amp, modular",
        packing: "10 pcs. in a box",
        price: 20,
      },
      {
        _id: 2,
        name: "anchor socket",
        desc: "5-amp, original",
        packing: "20 pcs. in a box",
        price: 20,
      },
      {
        _id: 3,
        name: "carryon socket",
        desc: "5-amp, modular",
        packing: "10 pcs. in box",
        price: 35,
      },
      {
        _id: 4,
        name: "PVC socket",
        desc: "5 pin",
        packing: "50 pcs. loose",
        price: 37,
      },
      {
        _id: 5,
        name: "SPY socket",
        desc: "5-amp, chinni mitti",
        packing: "10 pcs. in box",
        price: 39,
      },
      {
        _id: 6,
        name: "new choice socket",
        desc: "5-amp, PVC",
        packing: "10 pcs. in box",
        price: 38,
      },
    ],
  },
  coollers: {
    img: coolers,
    displayImg: [switcDisplayImg, switcDisplayImg2],
    items: [],
  },
  bulbs: {
    img: bulbs,
    items: [],
  },
  fans: {
    img: fans,
    items: [],
  },
  holders: {
    img: holders,
    items: [],
  },
};

const ProductDataReducer = (state = INNITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return {
                ...state
            }
     
    }
}

export default ProductDataReducer;