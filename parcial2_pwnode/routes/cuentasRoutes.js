const express = require('express');
const router = express.Router();
const { obtenerCuentas, obtenerCuentaPorId, obtenerCuentasPorParametro, obtenerCuentasBalance } = require('../controllers/cuentasControllers');

// Rutas:
// Listar todas las cuentas
router.get('/', obtenerCuentas);

// Obtener una cuenta por ID
router.get('/:id', obtenerCuentaPorId);

// Obtener cuentas por parámetro de consulta
router.get('/search', obtenerCuentasPorParametro);  

// Obtener el balance total de las cuentas activas
router.get('/cuentasBalance', obtenerCuentasBalance);

module.exports = router;
