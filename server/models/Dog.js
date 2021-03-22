const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
    name:{
        type: String, //type of information stored (variable type)
        required: true, //makes it so that this variable is required to be entered
        trim: true,  //trims off the spaces
        unique: true, //cant have the same name as other dogs
    },
    breed:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        min: 0,
        required: true,
    },
    createdDate:{
        type: Date,
        default: Date.now, //stores the time that is set on the local machine
    },
});

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return DogModel.findOne(search, callback); //look in my database for dog that has this name
    //return DogModel.findOne({name}, callback); if you want to create it in one line
};

DogModel = mongoose.model("Dog", DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;