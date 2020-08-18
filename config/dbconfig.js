
var con = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "0bxrrVrX4L5yS4Ww",
  DB: "food",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



module.exports = {'con':con};