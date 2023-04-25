const { dataSource } = require("../utils");
const Wilder = require("../entity/Wilder");
const { Long } = require("typeorm");

module.exports ={
    create: async (req, res) => {
        try {
          await dataSource.getRepository(Wilder).save(req.body);
          res.send("Created wilder");
        } catch (error) {
          console.log(error);
          res.send("Error while creating wilder");
        }},
    find: async(req, res) => {
        try{
            await dataSource
                .getRepository(Wilder)
                .find(req.body);
                res.send(data);
        } catch (error) {
            console.log(error);
            res.send("Failed to find wilder");
        }},
    update: async(req, res) => {
        try{
        await dataSource
            .getRepository(Wilder)
            .update({id :req.body.id}, {name :req.body.name});
            res.send("Updated wilder");
        } catch (error){
            console.log(error);
            res.send("Failed to update wilder")
        }},
    delete: async(req, res) => {
        try {
        await dataSource
            .getRepository(Wilder)
            .delete({name :req.body.name});
            res.send("Deleted wilder")
        } catch {
            console.log(error);
            res.send("Failed to delete wilder")
        }}}