import mongoose from "mongoose";

export const JobSchema = new mongoose.Schema({
    start_date: {
        type: Date,
        required: true,
    },
    end_date:{
        type: Date,
        required: true,
    },
    organization:{
        type:String,
        required: true,
    },
    job_title:{
        type: String,
        required: true,
    },
    job_desc:{
        type:String,
        required:true,
    }
})

const Jobs = mongoose.model('job', JobSchema);
export default Jobs;