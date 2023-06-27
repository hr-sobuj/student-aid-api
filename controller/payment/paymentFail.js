
async function paymentFail(req, res, next) {
    try {
        return res.status(200).json(
            {
              data: req.body,
              message: 'Payment failed'
            }
          );
    } catch (error) {
        next(error);
    }
}

module.exports = paymentFail;
