module.exports = (sequelize, Sequelize) => {
  const Detail = sequelize.define("detail", {
    person: {
      type: Sequelize.STRING
    },
    grup: {
      type: Sequelize.INTEGER
    },
    age: {
      type: Sequelize.INTEGER
    }
  });

  return Detail;
};

