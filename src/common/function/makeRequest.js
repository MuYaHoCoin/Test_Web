import axios from "axios";

const makeRequest = async (requestObj) => {
  const result = await axios(requestObj);
  return result.data;
};

export default makeRequest;
