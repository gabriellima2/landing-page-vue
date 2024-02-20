import { SendEmailDTO } from '../dtos/send-email.dto'

export interface MailerService {
	send(params: SendEmailDTO): Promise<void>
}
