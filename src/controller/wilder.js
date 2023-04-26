const { dataSource } = require("../utils");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

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
            const data = await dataSource
                .getRepository(Wilder)
                .find();
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
        }},
  
        addSkill: async (req, res) => {
            try {
                const wilderToUpdate = await dataSource
                .getRepository(Wilder)
                .findOneBy({name: req.body.wilderName});
                console.log(wilderToUpdate);
    
                const skillToAdd = await dataSource
                .getRepository(Skill)
                .findOneBy({name: req.body.skillName});
    
                wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
                await dataSource.getRepository(Wilder).save(wilderToUpdate)
                res.send("Skill added to wilder");
    
            }catch(error) {
                    res.send("Error while creating skill");
                }
        }
    
    }