import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'internviewpr@gmail.com', 
        pass: 'Strongpassword1234' // Move this to environment variables process.env.EMAIL_PASS
    }
})

let mailOptions = {
    from: 'internviewpr@gmail.com',
    to: 'jose.rivera233@upr.edu',
    subject: "Sign up confirmation",
    text: "Please validate your email using this link: . validateemail.com"
}

transporter.sendMail(mailOptions, function(err, data){
    if(err) {
        console.log("error", err);
    } else {
        console.log("Email sent");
    }
    return null;
})
