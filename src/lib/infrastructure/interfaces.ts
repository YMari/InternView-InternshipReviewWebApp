

export interface IEmailService {
    sendVerificationEmail: () => Promise<Object>
}