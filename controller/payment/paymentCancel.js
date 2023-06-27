
async function paymentCancel(req, res, next) {
    try {
        return res.status(200).json(
            {
              data: req.body,
              message: 'Payment cancelled'
            }
          );
    } catch (error) {
        next(error);
    }
}

module.exports = paymentCancel;
