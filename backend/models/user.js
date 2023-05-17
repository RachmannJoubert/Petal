module.exports = (connection, DataTypes) => {
    const schema = {
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    };
  
    const UserModel = connection.define('User', schema);
    return UserModel;
  };