'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    Name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    language: DataTypes.STRING,
    author_id: DataTypes.NUMBER,
    category_id: DataTypes.NUMBER,
    img_cover: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};