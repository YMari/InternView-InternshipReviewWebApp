

export interface IEmailService {
    sendVerificationEmail: () => Promise<Object>
    resetPasswordEmail: () => Promise<Object>
    sendNotificationEmail:() => Promise<Object> 
}