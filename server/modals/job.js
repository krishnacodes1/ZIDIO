import {Schema, Model} from "mongoose";

export const JobSchema = new Schema({
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

const Jobs = Model('job', JobSchema);
export default Jobs;