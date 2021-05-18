import react from 'react';
import './categories.stylesheet.scss';
import productData from '../../../PRODUCTS_DATA';
// react carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class Categories extends react.Component{
    constructor(){
        super();
    }

    render(){
        // Array of Categories
        const dataArr = Object.keys(productData);

        // carousel of Categories
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 4 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 400, min: 0 },
              items: 1,
              slidesToSlide: 2 // optional, default to 1.
            }
          };

        return(
            <div className="categories">
                <h2>shop by category 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                </h2>
                <Carousel
                    partialVisible={true} 
                    responsive={responsive}
                    // centerMode={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={300}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                >
                    {
                        dataArr.map((key)=>{
                            return(
                                <div className="category" style={{backgroundImage:`url(${productData[key].img})`}}>                                
                                    <div className="desc">
                                        <small className="catName">{key}</small>
                                        <button>
                                            <small>shop now</small> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" style={{margin:"0px 5px"}} className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )                    
                        })
                    }
                </Carousel>
                           
            </div>
        )
    }
} 
export default Categories;