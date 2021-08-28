import { createSelector } from "reselect";

const productData = state => state.productData;

export const selectProductCategories = createSelector(
    [productData],
    (productData)=> {
        let catArr = [];
        for(let key in productData){
            catArr.push({
                catName: key,
                catImg:productData[key].img
            })
        }
        return catArr;
    }
) 