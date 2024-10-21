// const { DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize';
// const sequelize = require('../config/database');
import sequelize from '../config/database';
// const Thread = require('./Thread');
import Thread from './Thread';
// const Comment = require('./Comment');
import Comment from './Comment';

// Define the Like model
const Like = sequelize.define('Like', {
    thread_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Thread,
            key: 'id'
        },
        allowNull: true,
        onDelete: 'CASCADE'
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Comment,
            key: 'id'
        },
        allowNull: true,
        onDelete: 'CASCADE'
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

module.exports = Like;
