import { z } from 'zod'

export const LoginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(50),
})

export const SignupFormSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	password: z.string().min(6).max(50),
	passwordConfirmation: z.string().min(6).max(50),
})

export const UserInfoSchema = z.object({
	bio: z.string().min(0).max(100),
	company: z.string().min(0).max(50),
	website: z.string().min(0).max(50).optional(),
})

export type FormState =
	| {
			errors?: {
				name?: string[]
				email?: string[]
				password?: string[]
				passwordConfirmation?: string[]
			}
			message?: string
	  }
	| undefined
