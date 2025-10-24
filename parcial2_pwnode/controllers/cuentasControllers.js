const cuentas = [
  {
    "_id": "01",
    "isActive": false,
    "picture": "https://placehold.it/32x32",
    "balance": "$1,517.19",
    "client": "Vilma Pruitt",
    "gender": "female"
  },
  {
    "_id": "02",
    "isActive": true,
    "picture": "https://placehold.it/32x32",
    "balance": "$2,208.51",
    "client": "Kelsey Holder",
    "gender": "male"
  },
  {
    "_id": "03",
    "isActive": true,
    "picture": "https://placehold.it/32x32",
    "balance": "$4,299.78",
    "client": "Clay Bullock",
    "gender": "male"
  },
  {
    "_id": "04",
    "isActive": false,
    "picture": "https://placehold.it/32x32",
    "balance": "$4,295.88",
    "client": "Lynette Porter",
    "gender": "male"
  },
  {
    "_id": "05",
    "isActive": false,
    "picture": "https://placehold.it/32x32",
    "balance": "$3,903.64",
    "client": "Graham Stafford",
    "gender": "female"
  },
  {
    "_id": "06",
    "isActive": false,
    "picture": "https://placehold.it/32x32",
    "balance": "$2,482.21",
    "client": "Foreman Garrison",
    "gender": "male"
  },
  {
    "_id": "07",
    "isActive": true,
    "picture": "https://placehold.it/32x32",
    "balance": "$1,436.95",
    "client": "Verna Booth",
    "gender": "male"
  }
];

// Funciones:
// Obtener todas las cuentas
const obtenerCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

// Obtener cuenta por ID
const obtenerCuentaPorId = (req, res) => {
  const id = req.params.id;
  const cuenta = cuentas.find(cuenta => cuenta._id === id);
  
  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false, account: null });
  }
};

// Obtener cuentas por parámetro de consulta
const obtenerCuentasPorParametro = (req, res) => {
  const { queryParam } = req.query;
  
  const cuentasEncontradas = cuentas.filter(cuenta =>
    cuenta.client.toLowerCase().includes(queryParam.toLowerCase()) ||  // Para buscar por nombre
    cuenta.gender.toLowerCase().includes(queryParam.toLowerCase())     // Para buscar por genero
  );
  
  if (cuentasEncontradas.length > 0) {
    res.json({ finded: true, data: cuentasEncontradas });
  } else {
    res.json({ finded: false, account: null });
  }
};


// Obtener el balance de cuentas activas
const obtenerCuentasBalance = (req, res) => {
  const cuentasActivas = cuentas.filter(cuenta => cuenta.isActive);
  const totalBalance = cuentasActivas.reduce((acc, cuenta) => acc + parseFloat(cuenta.balance.replace('$', '').replace(',', '')), 0);

  res.json({
    status: cuentasActivas.length > 0,
    accountBalance: totalBalance
  });
};

module.exports = {
  obtenerCuentas,
  obtenerCuentaPorId,
  obtenerCuentasPorParametro,
  obtenerCuentasBalance
};
