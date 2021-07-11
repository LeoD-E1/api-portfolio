import { modelUser } from "../Models/user.model";
import Portfolio from "../Models/portfolio.model";
import sequelize from '../Database/database'
import { DataTypes } from 'sequelize'

const User = modelUser(sequelize, DataTypes)

User.hasMany(Portfolio)
Portfolio.belongsTo(User, { foreignKey: id_portfolio })