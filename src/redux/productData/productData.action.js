// images for product data
import sockets from '../../images/categories.images/socket.jpg';
import switches from '../../images/categories.images/switches.jpg';
import coollers from '../../images/categories.images/coolers.jpg';
import bulbs from '../../images/categories.images/bulbs.jpg';
import fans from '../../images/categories.images/fans.jpg';
import holders from '../../images/categories.images/holders.jpg';
//firestore
import { firestore } from '../../firebase/firebase';

export const SetProductData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const StartFetchingData = () => ({
  type: "START_FETCHING",
  payload: true,
});

export const AsynDataFetching = () => (dispatch) => {
  dispatch(StartFetchingData());
  const imagesArray = {sockets,switches,coollers,bulbs,fans,holders};
  const productsRef = firestore.collection("Products");
  productsRef.onSnapshot(async (snapshot) => {
    const fetchedData = snapshot.docs.map((doc) => {
      const { category, items } = doc.data();
      return {
        img: imagesArray[category.toLowerCase()],
        forURL: encodeURI(category.toLowerCase()),
        _id: doc.id,
        category,
        items,
      };
    });
    // console.log(fetchedData.reduce((acc, data) => {
    //   acc[data.category.toLowerCase()] = data;
    //   return acc;
    // }, {}), "productDataFromFirestore");
    dispatch(
        SetProductData(
        fetchedData.reduce((acc, data) => {
          acc[data.category.toLowerCase()] = data;
          return acc;
        }, {})
      )
    );
  });
};
