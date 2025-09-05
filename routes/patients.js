const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');


router.use(authMiddleware);


router.post('/', createPatient);


router.get('/', getPatients);


router.get('/:id', getPatientById);


router.put('/:id', updatePatient);


router.delete('/:id', deletePatient);

module.exports = router;
