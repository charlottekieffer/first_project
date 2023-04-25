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
    find: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .find(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(() => {
                res.send("Error while fetching wilder");
            });
    },
    update: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .update(req.body)
            .then(() => {
                res.send()
            })
            .catch(() => {
                res.send("Error while updating wilder");
            });
    },
    delete: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .delete(req.body)
            .then(() => {
                res.send()
            })
            .catch(() => {
                res.send("Error while deleting wilder");
            });
    },
};