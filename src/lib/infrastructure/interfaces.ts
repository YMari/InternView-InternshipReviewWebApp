

export interface IEmailService {
    sendVerificationEmail: (recepient:String) => Promise<Object>
    resetPasswordEmail: () => Promise<Object>
    sendNotificationEmail:() => Promise<Object> 
}