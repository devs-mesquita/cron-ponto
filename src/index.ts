import dotenv from "dotenv";
import cron from "node-cron";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  
});