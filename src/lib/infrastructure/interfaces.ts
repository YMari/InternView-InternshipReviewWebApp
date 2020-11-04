

export interface IEmailService {
    sendVerificationEmail: (recipient:string, subject:string, text:string) => Promise<Object>
    resetPasswordEmail: (recipient:string, subject:string, text:string) => Promise<Object>
    sendNotificationEmail:(recipient:string, subject:string, text:string) => Promise<Object> 
}
