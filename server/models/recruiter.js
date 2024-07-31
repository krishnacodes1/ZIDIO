import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { ApplicantSchema } from "./applicant.js";
const VacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    organization:{
        type:String,
        required: true,
    },
    ctc:{
        type: String,
        required: true,
    },
    job_desc:{
        type:String,
        required:true,
    },
    applicants:{
        type: [ApplicantSchema],
    }
})

export const RecruiterSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required: true,
    },
    username: {
        type:String,
        required: true,
    },
    password:{
        type:String,
    },
    organization:{
        type: String,
        required: true,
    },
    vacanciesCreated:{
        type:[VacancySchema]
    }
});

RecruiterSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 20);
    next();
})

const Recruiter = mongoose.model('recruiter', RecruiterSchema);
export default Recruiter;