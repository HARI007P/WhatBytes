const express = require('express');
const router = express.Router();
const {
  createMapping,
  getMappings,
  getMappingsByPatient,
  deleteMapping
} = require('../controllers/mappingController');


router.post('/', createMapping);


router.get('/', getMappings);


router.get('/:patient_id', getMappingsByPatient);

router.delete('/:id', deleteMapping);

module.exports = router;
