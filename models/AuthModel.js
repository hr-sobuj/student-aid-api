const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
        },
        nid: {
            type: String,
        },
        bkash:{
            type: String,
        },
        attachments:[
            {
                type: String,
            }
        ],
        post: [
            {
                type: mongoose.Types.ObjectId,
                ref:"Post"
            }
        ],
        donate: [
            {
                post_id:{
                    type: mongoose.Types.ObjectId,
                    ref:"Post"
                },
                donate_id:{
                    type: mongoose.Types.ObjectId,
                    ref:"Donate"
                },
                amount:{
                    type:String
                }
            },
            {
                timestamps: true,
                // eslint-disable-next-line prettier/prettier
            },
        ],
        receive: [
            {
                post_id:{
                    type: mongoose.Types.ObjectId,
                },
                collected_amount:{
                    type: Number,
                },
                total_amount:{
                    type:Number
                }
            },
            {
                timestamps: true,
                // eslint-disable-next-line prettier/prettier
            },
        ],
        archive:{
            type:Boolean
        },
        fund_collection:{
            type:Boolean
        },
        role: {
            type: String,
            enum: ['admin', 'donor', 'student'],
            default: 'student',
        },
        status: {
            type: String,
            enum: ['verified', 'unverified','pending'],
            default: 'unverified',
        },
    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const AuthModel = mongoose.model('Auth', AuthSchema);

module.exports = AuthModel;
