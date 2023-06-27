
async function paymentNotification(req, res, next) {
    try {
        return res.status(200).json(
            {
              data: req.body,
              message: 'Payment notification'
            }
          );
    } catch (error) {
        next(error);
    }
}

module.exports = paymentNotification;
