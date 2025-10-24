const express = require('express');
const app = express();
const port = 3130;

// Middleware para JSON
app.use(express.json());

// Importar rutas
const cuentasRoutes = require('./routes/cuentasRoutes');
app.use('/cuentas', cuentasRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
