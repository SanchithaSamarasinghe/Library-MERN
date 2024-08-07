async function getAll(res,Model,name) {
    const result = await Model.find();
    if(result){
        res.status(200).json(result);
    }
    else{
        res.status(404).send(name+"not found");
    }
}

async function getById(res,Model,name){
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send("Invalid Id")
    }
    const result = await Model.findById(id)
    if(result){
        res.status(200).jason(result)
    }else{
        res.status(404).send(name+"not found")
    }    
    }
async function add(res,Models,data){
    try{
        const result = await Model.create(data)
        res.status(200).json(result)
    }catch(error){
        res.status(500).jason(error)
    }
    
}
async function deleteById(req, res, Model, name){
    const id = req.params.id
    if(!mongoose.Type.objectId.isValid(id)){
        return res.status(400).send("invalid")
    };
}
