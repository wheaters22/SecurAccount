module.exports = function(sequelize, DataTypes) {
	var Record = sequelize.define(
		"Record", 
		{

			customer_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				validate: { min: 1 }
			},

			amount_due: {
				type: DataTypes.DOUBLE(11,2),
				allowNull: false,
				validate: { min: 0.00 }
			},
			customer_acct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			vend_acct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			cust_acct_type: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			pmt_date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				validate: {
					len: [1]
				}


		{
// 			classMethods: {
// 				associate:  function(models) {
// 					Record.belongsTo(models.Customer, {
// 						foreignKey: "customer_id"
// 					});
// 					Record.belongsTo(models.PayFrom, {
// 						foreignKey: "bank_id"
// 					});
// 					Record.belongsTo(models.PayTo, {
// 						foreignKey: "vendor_id"
			},
			bank_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				validate: { min: 1 }
			},
			vendor_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				validate: { min: 1 }
			}
		},

		{
			classMethods: {
				associate:  function(models) {
					Record.BelongsTo(models.Customers, models.PayFroms, models.PayTos, {
						onDelete: "cascade"

					});
				}
			}	
		}
	);

	return Record;
}