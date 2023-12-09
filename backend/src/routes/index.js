const { Router } = require('express');
const transactionRoute = require('./transactions.route')

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).json("This is a sentence.")
})

router.use("/transactions", transactionRoute)

module.exports = router;