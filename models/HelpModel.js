const mongoose = require('mongoose');

const HelpSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        tags: [{
            type:String
        }],
        status: {
            type: String,
            enum: ['accepted', 'pending','rejected'],
            default: 'pending',
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"Auth",
        },
        donate:{
            type:mongoose.Types.ObjectId,
            ref:"Donate",
        }
        
    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const HelpModel = mongoose.model('Post', HelpSchema);

module.exports = HelpModel;
