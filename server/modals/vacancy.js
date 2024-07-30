import {Schema, Model} from "mongoose";
import { ApplicantSchema } from "./applicant.js";
export const VacancySchema = new Schema({
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

const Vacancy = Model('job', VacancySchema);
export default Vacancy;