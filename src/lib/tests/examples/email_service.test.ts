
import container from '../../container'
import * as infrastruct from '../../infrastructure';



const email_service = container.get<infrastruct.interfaces.IEmailService>(infrastruct.I_TYPES.IEmailService)



test("Email service test", async ( ) => { 

    await email_service.sendVerificationEmail(
        "jose.rivera233@upr.edu"
    )
})


