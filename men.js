const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req,res)=>{
    try{

        const AddRecord = new MensRanking(req.body);
        console.log(req.body);

       const InsertMens = await AddRecord.save();
       res.status(201).send(InsertMens);

    }
    catch(e){
        res.status(400).send(e);
    }

})


router.get("/mens", async (req,res)=>{
    try{

       const getMens = await MensRanking.find({});
       res.status(201).send(getMens);

    }
    catch(e){
        res.status(400).send(e);
    }

})


router.get("/mens/:id", async (req,res)=>{
    try{

        const  _id = req.params.id;

       const getMen = await MensRanking.findById({_id});
       res.send(getMen);

    }
    catch(e){
        res.status(400).send(e);
    }

})


router.patch("/mens/:id", async (req,res)=>{
    try{

        const  _id = req.params.id;

       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true      
         });
       res.send(getMen);

    }
    catch(e){
        res.status(500).send(e);
    }

})

router.delete("/mens/:id", async (req,res)=>{
    try{

       const delMen = await MensRanking.findByIdAndDelete(req.params.id);
       res.send(delMen);

    }
    catch(e){
        res.status(500).send(e);
    }

})

module.exports = router;

