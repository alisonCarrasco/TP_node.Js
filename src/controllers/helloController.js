import meteo from "../services/meteo";

const hello = (req, res) => {
    res.status(200).send("Hello World !"); //200 quand tout se passe bien 
};

// const rien;
const templatedPage = (req, res) => {
    let users = [{name: "alison", age: 24 }, { name: "Mehdi", age: 28 }];
    res.status(200).render('pages/index', { users });
};


 const getMeteo= async (req, res)=>
{
    const { city } = req.params;
    console.log(city);
    const meteoData = await meteo.getCityMeteo(city);
    const meteoCity = JSON.parse(meteoData);
    // console.log(meteoCity);
    // res.status(200).json(meteoCity);
    res.status(200).render('pages/meteo', {meteoCity: meteoCity});
}

export default{
    hello,
    templatedPage,
    getMeteo
};