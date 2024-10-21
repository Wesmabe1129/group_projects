// const { DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize';
// const sequelize = require('../config/database');
import sequelize from '../config/database';
// const Thread = require('./Thread');
import Thread from './Thread';

// Define the Share model
const Share = sequelize.define('Share', {
    thread_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Thread,
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    }
}, {
    timestamps: true,
    createdAt: 'shared_at',
    updatedAt: false
});

module.exports = Share;
