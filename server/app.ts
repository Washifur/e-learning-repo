require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';

export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

import {ErrorMiddleware} from "./middleware/error";

import userRouter from './routes/user.route';

import courseRouter from './routes/course.route';



//body parser

app.use(express.json({limit: '50mb'}));


// cookie parser

app.use(cookieParser());

// cors

app.use(cors({
    // origin: process.env.ORIGIN,
    // origin: process.env.ORIGIN,
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

}));

// routes

app.use("/api/v1", userRouter);

app.use("/api/v1", courseRouter);


// testing api

app.get("/test", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success:true,
        message:"API is working",
    });
});

//unknown  routing

app.all("*", (req:Request, res:Response, next:NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
});

// app.use(ErrorMiddleware);
export default app;