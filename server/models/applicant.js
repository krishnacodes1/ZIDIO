import mongoose from "mongoose";
import {JobSchema} from "./job.js";
import bcrypt from 'bcrypt';

const CertificationSchema = new mongoose.Schema({
    issue_date:{
        type: Date,
        required: true,
    },
    organization:{
        type: String,
        required: true,
    },
    title: {
        type:String,
        required: true,
    }
});

export const ApplicantSchema = new mongoose.Schema({
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
    experience:{
        type: [JobSchema],
    },
    certifications:{
        type: [CertificationSchema]
    },
    profile_summary:{
        type:String
    },
    roles:{
        type: [String],
        required:true,
    },
    location:{
        type:[String],
        required:true,
    },
});

ApplicantSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 20);
    next();
})
const Applicant = mongoose.model('applicant', ApplicantSchema);
export default Applicant;