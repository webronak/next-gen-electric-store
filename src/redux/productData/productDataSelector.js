import { createSelector } from "reselect";

const productData = state => state.productData;

export const selectProductCategories = createSelector(
    [productData],
    (productData)=> {
        let catArr = [];
        for(let key in productData.data){
            catArr.push({
                catName: key,
                catImg:productData.data[key].img
            })
        }
        return catArr;
    }
) 