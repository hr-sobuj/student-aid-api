async function paymentSuccess(req, res, next) {
    try {
        //  res.status(200).json(
        //     {
        //       data: req.body,
        //       message: 'Payment success',
        //       url:'http://localhost:3000/my-profile'
        //     }
        //   );
        res.redirect(`http://localhost:3000/ack/${req.body.amount}/success`);
    } catch (error) {
        next(error);
    }
}

module.exports = paymentSuccess;

// {
//     "data": {
//     "tran_id": "REF123",
//     "val_id": "2210232248120ia2gbWFtulEoWQ",
//     "amount": "4567.00",
//     "card_type": "BKASH-BKash",
//     "store_amount": "4452.83",
//     "card_no": "",
//     "bank_tran_id": "221023224812nt5Wy9CwdM4uLxW",
//     "status": "VALID",
//     "tran_date": "2022-10-23 22:48:12",
//     "error": "",
//     "currency": "BDT",
//     "card_issuer": "BKash Mobile Banking",
//     "card_brand": "MOBILEBANKING",
//     "card_sub_brand": "Classic",
//     "card_issuer_country": "Bangladesh",
//     "card_issuer_country_code": "BD",
//     "store_id": "hstu634e6a0cc8863",
//     "verify_sign": "0e98ea42233a2ddbf48d8d321ce2ebee",
//     "verify_key": "amount,bank_tran_id,base_fair,card_brand,card_issuer,card_issuer_country,card_issuer_country_code,card_no,card_sub_brand,card_type,currency,currency_amount,currency_rate,currency_type,error,risk_level,risk_title,status,store_amount,store_id,tran_date,tran_id,val_id,value_a,value_b,value_c,value_d",
//     "verify_sign_sha2": "04220e4f568212dce47b74d35276989bc3e1949659b0975f9b6c31fedc71e9e4",
//     "currency_type": "",
//     "currency_amount": "",
//     "currency_rate": "",
//     "base_fair": "",
//     "value_a": "",
//     "value_b": "",
//     "value_c": "",
//     "value_d": "",
//     "subscription_id": "",
//     "risk_level": "0",
//     "risk_title": "Safe"
//     },
//     "message": "Payment success",
//     "url": "http://localhost:3000/my-profile"
