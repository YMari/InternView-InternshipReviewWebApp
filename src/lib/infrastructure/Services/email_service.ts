import * as i from '../interfaces'
import {injectable} from 'inversify'
import nodemailer from 'nodemailer'


export async function sendEmail(recipient:string, subject:string, text:string): Promise<Object> {

    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.COMPANY_EMAIL, 
            pass: process.env.COMPANY_EMAIL_PASS
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
        console.log(process.env.EMAIL_SERVICE)
        console.log(process.env.COMPANY_EMAIL)
        console.log(process.env.COMPANY_EMAIL_PASS)
    }
    return null
}


@injectable()
export default class EmailService implements i.IEmailService {

    async sendVerificationEmail(recipient:string, subject:string, text:string):Promise<Object>{
        return sendEmail(recipient, subject, text);
    }
    async resetPasswordEmail(recipient:string, subject:string, text:string):Promise<Object>{
        return sendEmail(recipient, subject, text);
    }
    async sendNotificationEmail(recipient:string, subject:string, text:string):Promise<Object>{
        return sendEmail(recipient, subject, text);
    }
}
   