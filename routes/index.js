const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname; //TODO Ruta absoluta donde se encuentra este archivo

const removeExtension = (fileName) => {
  //TODO tracks.js = [tracks, js]
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); //TODO index, tracks

  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`)); //TODO http://localhost:3000/api/xyz
  }
});

module.exports = router;
