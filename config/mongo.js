const mongoose = require('mongoose');

const dbConnectNoSql = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log('Conexión correcta...');
      } else {
        console.log('Error de Conexión...');
      }
    }
  );
};

module.exports = dbConnectNoSql;
