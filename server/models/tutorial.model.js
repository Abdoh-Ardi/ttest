// const { Sequelize } = require("sequelize");
// const { sequelize } = require(".");

// const { Sequilize } = require(".")

module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })
    return Tutorial;
};
