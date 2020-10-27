import * as i from '../interfaces'
import {injectable, inject} from 'inversify'
import nodemailer from 'nodemailer'




@injectable()
export default class EmailService implements i.IEmailService {
    
    constructor( )
    {

    }

    sendVerificationEmail(recepient:String):Promise<Object>{

    const nodemailer = require('nodemailer');


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'internviewpr@gmail.com', 
            pass: 'Strongpassword1234' // Move this to environment variables process.env.EMAIL_PASS
        }
    })

    let mailOptions = {
        from: 'internviewpr@gmail.com',
        to: recepient,
        subject: "Sign up confirmation",
        text: "Please validate your email using this link: . validateemail.com"
    }

    transporter.sendMail(mailOptions, function(err,data){
        if(err) {
            console.log("error");
        } else {
            console.log("Email sent");
        }
        return null;
    })
    return null;
    };

    resetPasswordEmail:() => Promise<Object>;
    sendNotificationEmail: () => Promise<Object>;

}
   


