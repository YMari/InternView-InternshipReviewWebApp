

export interface IEmailService {
    sendVerificationEmail: (recipient:String) => Promise<Object>
    resetPasswordEmail: () => Promise<Object>
    sendNotificationEmail:() => Promise<Object> 
}
