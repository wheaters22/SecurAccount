
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
		},

		{
			classMethods: {
				associate: function(models) {
					PayFrom.hasMany(models.Records, {
						onDelete: "cascade"
					});
				}
			}
		}
	);

	return PayFrom;
}