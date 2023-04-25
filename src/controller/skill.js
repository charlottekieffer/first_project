const { dataSource } = require("../utils");
const Skill = require("../entity/Skill");

module.exports ={
    create: async (req, res) => {
        try {
          await dataSource.getRepository(Skill).save(req.body);
          res.send("Created Skill");
        } catch (error) {
          console.log(error);
          res.send("Error while creating Skill");
        }},
    find: async(req, res) => {
        try{
            const data = await dataSource
                .getRepository(Skill)
                .find();
                res.send(data);
        } catch (error) {
            console.log(error);
            res.send("Failed to find Skill");
        }},
    update: async(req, res) => {
        try{
        await dataSource
            .getRepository(Skill)
            .update({id :req.body.id}, {name :req.body.name});
            res.send("Updated Skill");
        } catch (error){
            console.log(error);
            res.send("Failed to update Skill")
        }},
    delete: async(req, res) => {
        try {
        await dataSource
            .getRepository(Skill)
            .delete({name :req.body.name});
            res.send("Deleted Skill")
        } catch {
            console.log(error);
            res.send("Failed to delete Skill")
        }}
    }