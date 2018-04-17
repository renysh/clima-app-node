const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}`;

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//9a19c90169542b5650bba0e0554af403


/*db.createUser(
    {
      user: "administrator",
      pwd: "sin_teticas",
      roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
    }
  )


  db.createUser(
    {
        user: "administrador", 
        pwd: "sin-teticas", 
        roles:["root"]
    })*/