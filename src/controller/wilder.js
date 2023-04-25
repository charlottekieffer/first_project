const { dataSource } = require("../utils");
const Wilder = require("../entity/Wilder");

module.exports ={
    create: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .save(req.body)
            .then(() => {
                res.send("Created Wilder")
            })
            .catch(() => {
                res.send("Error while creating wilder");
            });
    },
};