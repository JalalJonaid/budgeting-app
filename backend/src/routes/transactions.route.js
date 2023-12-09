const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).json("This is the transaction page.")
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).json(`This is the ${id} page.`)
})

router.post("/", (req, res) => {
    return res.status(201).json("This is a post request")
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(204).json(`The item with ${id} has been deleted.`)
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).json(`The item with ${id} has been updated.`)
})

module.exports = router;