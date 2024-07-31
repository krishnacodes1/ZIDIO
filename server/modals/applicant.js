import { Model, Schema } from "mongoose";
import {JobSchema} from "./job.js";
import CertificationSchema from "./certifications.js"

export const ApplicantSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    email:{
        type: String,
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
        type: String,
        required:true,
    },
    location:{
        type:[String],
        required:true,
    },
});

const Applicant = Model('applicant', ApplicantSchema);
export default Applicant;