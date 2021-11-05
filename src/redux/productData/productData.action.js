

export const SetProductData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const StartFetchingData = () => ({
  type: "START_FETCHING",
  payload: true,
});

