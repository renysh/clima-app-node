const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyClvOgeg6eftmG80q8V2FGUeaIvK8qks_U`);

    if (resp.code === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    //console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}