const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9a19c90169542b5650bba0e0554af403`);

    //console.log(resp);
    if (resp.data.cod === 404) {
        throw new Error(`No hay resultados de clima para los datos proporcionados`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}