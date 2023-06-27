// const SSLCommerzPayment = require("sslcommerz");

const SSLCommerzPayment = require('sslcommerz-lts')

async function paymentRequest(req, res, next) {
  console.log(req.body.total_amount);
    try {
      const data = {
        total_amount: req.body.total_amount,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: `${process.env.ROOT}/payment/payment-success`,
        fail_url: `${process.env.ROOT}/payment/payment-fail`,
        cancel_url: `${process.env.ROOT}/payment/payment-cancel`,
        shipping_method: 'No',
        product_name: 'Student AID.',
        product_category: 'Project',
        product_profile: 'general',
        cus_name: 'Habibur Rahman Sobuj',
        cus_email: 'sobujhd@gmail.com',
        cus_add1: 'Pabna',
        cus_add2: 'Pabna',
        cus_city: 'Pabna',
        cus_state: 'Pabna',
        cus_postcode: '6600',
        cus_country: 'Bangladesh',
        cus_phone: '01797972527',
        cus_fax: '01797972527',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D',
        ipn_url: `${process.env.ROOT}/payment/payment-notification`,
      };
    
      const sslcommerz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
      sslcommerz.init(data).then(data => {
    
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters

        // console.log(data);
    
        if (data?.GatewayPageURL) {
          // console.log(data.GatewayPageUR);
          // return res.status(200).redirect(data?.redirectGatewayURL);
          return res.status(200).json({
            url:data?.GatewayPageURL
          });
          // return res.status(200).redirect(data?.GatewayPageURL);
        }
        else {
          return res.status(400).json({
            message: "Session was not successful"
          });
        }
      });
    
    } catch (error) {
        next(error);
    }
}

module.exports = paymentRequest;
