module.exports = (connection, DataTypes) => {
    const schema = {
      common_name: DataTypes.STRING,
      latin_name: DataTypes.STRING,
      water: DataTypes.STRING,
      sunlight: DataTypes.STRING,
      pruning: DataTypes.STRING,
      img: DataTypes.IMAGE
    };
  
    const PlantModel = connection.define('Plant', schema);
    return PlantModel;
  };