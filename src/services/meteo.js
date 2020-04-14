import request from "request-promise-native";

const url = "https://www.prevision-meteo.ch/services/json/";

const getCityMeteo = async (city) => {
  try {
    return await request.get({ url: url + city });
  } catch (err) {
    console.log(`${err.message}`);
  }
};

export default { getCityMeteo }