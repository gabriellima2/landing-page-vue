import { SendEmailDTO } from '../../dtos/send-email.dto'
import { MailerService } from '../mailer-service'

export class MailerServiceImpl implements MailerService {
	async send(params: SendEmailDTO): Promise<void> {
		const { recipient, subject, body } = params
		await new Promise((resolve) => {
			return setTimeout(() => {
				resolve(
					window.open(`mailto:${recipient}?subject=${subject}&body=${body}`)
				)
			}, 500)
		})
	}
}
