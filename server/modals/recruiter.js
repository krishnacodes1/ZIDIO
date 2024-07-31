import { Model, Schema } from "mongoose";
import { VacancySchema } from "./vacancy.js";

export const RecuiterSchema = new Schema({
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
    organization:{
        type: String,
        required: true,
    },
    vacancies:{
        type:[VacancySchema]
    }
});

const Recuiter = Model('recruiter', RecuiterSchema);
export default Recuiter;