const mongoose = require('mongoose');

const DonateSchema = mongoose.Schema(
    {
        collected: {
            type: Number,
        },
        need: {
            type: Number,
        },
        total_amount: {
            type: Number,
        },
        donors: [
            {
                donar_id:{
                    type:mongoose.Types.ObjectId
                },
                weight:{
                    type:Number
                }
            }
        ],
        owner: {
            type: mongoose.Types.ObjectId,
        }


    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const DonateModel = mongoose.model('Donate', DonateSchema);

module.exports = DonateModel;
