import * as i from '../interfaces'
import nodemailer from 'nodemailer'
import {injectable, inject} from 'inversify'




@injectable()
export default class EmailService implements i.IEmailService {
    
    constructor( )
    {

    }
    sendVerificationEmail: () => Promise<Object>;



    


//     var recepient = ""
//     const nodemailer = require('nodemailer');


//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'internviewpr@gmail.com', 
//             pass: 'Strongpassword' // Move this to environment variables process.env.EMAIL_PASS
//         }
//     })

//     let mailOptions = {
//         from: 'internviewpr@gmail.com',
//         to: recepient,
//         subject: "Sign up confirmation",
//         text: "Please validate your email using this link: "
//     }

//     transporter.sendMail(mailOptions, function(err,data){
//         if(err) {
//             console.log("error");
//         } else {
//             console.log("Email sent");
//         }
//     })
//     return null;
// };

}
