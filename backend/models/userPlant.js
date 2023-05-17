module.exports = (connection, DataTypes) => {
    const schema = {
      user_id: DataTypes.INT,
      plant_id: DataTypes.INT
    };
  
    const UserPlantModel = connection.define('User Plant', schema);
    return UserPlantModel;
  };