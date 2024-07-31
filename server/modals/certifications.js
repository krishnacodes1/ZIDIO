import { Schema } from "mongoose";

const CertificationSchema = new Schema({
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

export default CertificationSchema;