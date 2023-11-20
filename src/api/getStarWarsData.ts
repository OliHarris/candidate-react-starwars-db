// getStarWarsData.tsx
import axios from "axios";

const getStarWarsData = async (
  queryString: string,
  dataUrl: string,
  setDataLoaded: (value: boolean) => void
) => {
  try {
    const response = await axios.get(
      queryString ? dataUrl + queryString : dataUrl
    );
    console.log(response);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setDataLoaded(true);
  }
};
export default getStarWarsData;
