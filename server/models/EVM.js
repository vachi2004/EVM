const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    name:
        {
            type:String,
            required:true
        },
    htno:
        {
            type:String,
            required:true
        }

});
const Student=mongoose.model("StudData",StudentSchema);
module.exports=Student;