<<<<<<< HEAD
=======

>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
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
<<<<<<< HEAD
		// ,
		// {
		// 	classMethods: {
		// 		associate:  function(models) {
		// 			Customer.hasMany(models.Customers, models.PayFroms, models.PayTos, models.Records, {
		// 					onDelete: "cascade"
		// 			});
		// 		}
		// 	}	
		// }
=======
		,
		{
			classMethods: {
				associate:  function(models) {
					Customer.hasMany(models.Customers, models.PayFroms, models.PayTos, models.Records, {
							onDelete: "cascade"
					});
				}
			}	
		}
>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
	);

	return Customer;
}