<<<<<<< HEAD
=======

>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
module.exports = function(sequelize, DataTypes) {
	var PayFrom = sequelize.define(
		"PayFrom", 
		{
			bank_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		}
	);

	return PayFrom;
}