import { mailerRecipientSchema } from '../schemas/mailer-recipient.schema'

export class EmailValidation {
	execute(email: string): string | null {
		const result = mailerRecipientSchema.safeParse({ email })
		if (result.success) return null
		return result.error.errors[0].message
	}
}
