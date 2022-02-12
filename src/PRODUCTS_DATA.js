import sockets from './images/categories.images/socket.jpg';
import switches from './images/categories.images/switches.jpg';
import coolers from './images/categories.images/coolers.jpg';
import bulbs from './images/categories.images/bulbs.jpg';
import fans from './images/categories.images/fans.jpg';
import holders from './images/categories.images/holders.jpg';
import switcDisplayImg from './images/display.images/switch.display.png';
import switcDisplayImg2 from './images/display.images/switch.display2.png';

// switches iamges
import havellsImg from "./images/categories.images/switches/havells.jfif"
import anchor from "./images/categories.images/switches/anchor.jpg"

import cobbal from "./images/categories.images/switches/cobbal.jfif"

import cubeBalls from "./images/categories.images/switches/cube balls.jfif"
import smartSolution from "./images/categories.images/switches/smart solution.jfif"
import wipro from "./images/categories.images/switches/wipro.jfif"




const products = {
    sockets:{
        img:sockets,
        items:[
            // {
            //     _id:7,
            //     name:"carryon socket",
            //     desc:"16-amp, modular",
            //     packing:"10 pcs. in a box",
            //     price:20
            // },
            // {
            //     _id:8,
            //     name:"anchor socket",
            //     desc:"5-amp, original",
            //     packing:"20 pcs. in a box",
            //     price:20
            // },
            // {
            //     _id:9,
            //     name:"carryon socket",
            //     desc:"5-amp, modular",
            //     packing:"10 pcs. in box",
            //     price:35
            // },
            // {
            //     _id:10,
            //     name:"PVC socket",
            //     desc:"5 pin",
            //     packing:"50 pcs. loose",
            //     price:37
            // },
            // {
            //     _id:11,
            //     name:"SPY socket",
            //     desc:"5-amp, chinni mitti",
            //     packing:"10 pcs. in box",
            //     price:39
            // },
            // {
            //     _id:12,
            //     name:"new choice socket",
            //     desc:"5-amp, PVC",
            //     packing:"10 pcs. in box",
            //     price:38
            // }
        ]
    },
    switches:{
        img:switches,
        
        items:[
            {
                _id:1,
                name:"Havells switch",
                desc:"16-amp, modular",
                packing:"10 pcs. in a box",
                img:havellsImg,
                price:20,
                searchTags:"havells switch"
            },
            {
                _id:2,
                name:"Anchor switch",
                desc:"5-amp, original",
                packing:"20 pcs. in a box",
                img:anchor,
                price:20,
                searchTags:"anchor switch switches"
            },
            {
                _id:3,
                name:"cobbal switch",
                desc:"5-amp, modular",
                packing:"10 pcs. in box",
                img:cobbal,
                price:35,
                searchTags:"cobbal switch switches"
            },
            {
                _id:4,
                name:"Cube balls switch",
                desc:"5 pin",
                packing:"50 pcs. loose",
                img:cubeBalls,
                price:37,
                searchTags:"cube balls switch switches"
            },
            {
                _id:5,
                name:"Smart solution switch",
                desc:"5-amp, chinni mitti",
                packing:"10 pcs. in box",
                img:smartSolution,
                price:39,
                searchTags:"smart solution switch switches"
            },
            {
                _id:6,
                name:"Wipro switch",
                desc:"5-amp, PVC",
                packing:"10 pcs. in box",
                img:wipro,
                price:38,
                searchTags:"wipro switch switches"
            }
        ]
    },
    coollers:{
        img:coolers,
        displayImg:[switcDisplayImg,switcDisplayImg2],
        items:[]
    },
    bulbs:{
        img:bulbs,
        items:[]
    },
    fans:{
        img:fans,
        items:[]
    },
    holders:{
        img:holders,
        items:[]
    }
}

export default products;