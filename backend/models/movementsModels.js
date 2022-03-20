import sequelize from "sequelize";
import db from "../config/db.js";

export const Movement = db.define("movements", {
  id: {
    type: sequelize.BIGINT,
    primaryKey: true,
  },
  concept: {
    type: sequelize.STRING,
  },
  amount: {
    type: sequelize.FLOAT,
  },
  date: {
    type: sequelize.DATE,
  },
  type: {
    type: sequelize.STRING,
  },
});
