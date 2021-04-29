import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name : {type:String, required:true},
    email: {type:String, required:true},
    password: {type: String, required: true},
    id: {type:String},
    dateOfBirth : {
        type: Date, required: true
    },

    about : {
        type : String
    },
    place : {
        type : String, required: true
    },
    website : {
        type : String
    },
    profileImage : {
        type : String,
        
    }
    
});

export default mongoose.model("User", userSchema);