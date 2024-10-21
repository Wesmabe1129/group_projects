// const { DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize';
// const sequelize = require('../config/database');
import sequelize from '../config/database';
// const Thread = require('./Thread');
import Thread from './Thread';

// Define the Comment model
const Comment = sequelize.define('Comment', {
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
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
    createdAt: 'created_at',
    updatedAt: false
});

module.exports = Comment;
