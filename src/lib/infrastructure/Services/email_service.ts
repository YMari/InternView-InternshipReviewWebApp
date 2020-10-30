import * as i from '../interfaces'
import {injectable} from 'inversify'
import nodemailer from 'nodemailer'

export async function sendEmail(recipient:string, subject:string, text:string): Promise<Object> {
    
    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "internviewpr@gmail.com", 
            pass: "Strongpassword1234"
        }
    })

    let mailOptions = {
        from: process.env.COMPANY_EMAIL,
        to: recipient,
        subject: subject,
        text: text
    }
    try {
        await transporter.sendMail(mailOptions)
    } 
    catch(Exception) {
        console.log(Exception)
    }
    return null
}


@injectable()
export default class EmailService implements i.IEmailService {

    async sendVerificationEmail(recipient:string, subject:string, text:string):Promise<Object>{
        return sendEmail(recipient, subject, text);
    }
    async resetPasswordEmail(recipient:String, subject:String, text:String):Promise<Object>{
    return null
    }
    async sendNotificationEmail(recipient:String, subject:String, text:String):Promise<Object>{
        return null
    }
}
   