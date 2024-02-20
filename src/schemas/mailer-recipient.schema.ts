import { z } from 'zod'

export const mailerRecipientSchema = z.object({
	email: z.string().email(),
})
