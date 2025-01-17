"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class warehouses extends Model {
        static associate({
            users,
            orders,
            orders_details,
            products_stocks,
            stocks_mutations,
            cities,
            products_stocks_histories,
        }) {
            this.hasMany(users, { foreignKey: "warehouses_id" });
            this.hasMany(orders, { foreignKey: "warehouses_id" });
            this.hasMany(orders_details, { foreignKey: "warehouses_id" });
            this.hasMany(products_stocks, { foreignKey: "warehouses_id" });
            this.hasMany(stocks_mutations, {
                foreignKey: "request_warehouses_id",
            });
            this.hasMany(stocks_mutations, {
                foreignKey: "sender_warehouses_id",
            });
            this.hasMany(products_stocks_histories, {
                foreignKey: "warehouses_id",
            });
            this.belongsTo(cities, { foreignKey: "cities_id" });
        }
    }
    warehouses.init(
        {
            name: DataTypes.STRING,
            status: DataTypes.ENUM("Active", "Inactive"),
        },
        {
            sequelize,
            modelName: "warehouses",
        }
    );
    return warehouses;
};
