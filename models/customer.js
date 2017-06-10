
module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define(
		"Customer", 
		{
			customer_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			customer_pw: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		}
		
		{
			classMethods: {
				associate:  function(models) {
					Customer.hasMany(models.Records, {
							onDelete: "cascade"
					});
				}
			}	
		}
	);

	return Customer;
}

//records.js associate with all 3 tables
//FI and vendor associate with just records