import * as i from '../interfaces'
import {injectable, inject} from 'inversify'
import nodemailer from 'nodemailer'




@injectable()
export default class EmailService implements i.IEmailService {
    
    constructor( )
    {

    }

    async sendVerificationEmail(recipient:String):Promise<Object>{

    const nodemailer = require('nodemailer');


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.COMPANY_EMAIL, 
            pass: process.env.COMPANY_EMAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: 'internviewpr@gmail.com',
        to: recipient,
        subject: "Sign up confirmation",
        text: "Please validate your email using this link: . validateemail.com"
    }

    await transporter.sendMail(mailOptions) // add try and catch

    return null

}

    resetPasswordEmail:() => Promise<Object>;
    sendNotificationEmail: () => Promise<Object>;

}
   


