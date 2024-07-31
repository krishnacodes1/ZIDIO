import Applicant from "../models/applicant.js";
import Recruiter from "../models/recruiter.js";
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import { application } from "express";
config();

// register new applicant
export const applicantRegister = async (req,res)=>{
    try{
        const {username, 
            email, 
            password, 
            experience, 
            certifications,
            profile_summary,
            roles,
            location
        } = req.body;
        const newApplicant = new Applicant({
            username, 
            email, 
            password, 
            experience, 
            certifications,
            profile_summary,
            roles,
            location
        });

        await newApplicant.save();
        res.status(201).json({ message: 'Applicant registered successfully' });
    }catch(err){
        res.status(500).json({error: err.message});
    }
}


export const registerRecruiter = async(req,res)=>{
    try{
        const {
            email,
            username, 
            password,
            organization,
        } = req.body;

        const newRecruiter = new Recruiter({
            email,
            username, 
            password,
            organization,
            vacanciesCreated:[],
        });

        await newRecruiter.save();
        res.status(201).json({ message: 'Recruiter registered successfully' });

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

//applicant & recruiter login
export const login = async (req,res)=>{
    try{
        const {
            email, 
            password,
            role, 
        } = req.body;
        let foundUser;
        if(role === 'applicant'){
            foundUser = await Applicant.findOne({email});
        }else if(role === 'recuriter'){
            foundUser = await Recruiter.findOne({email});
        }

        // user not found
        if(!foundUser){
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);


        // password doesn't match
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ applicantId: foundUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
