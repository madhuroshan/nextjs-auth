'use server'
import User from '../database/models/user.model'
import bcryptjs from 'bcryptjs'
import { createSession } from '../session'
import { connectToMongoDB } from '../database/mongoose'

export const signup = async (name: string, email: string, password: string) => {
	try {
		// Connect to database
		await connectToMongoDB()

		// Check if the user already exists
		const existingUser = await User.findOne({
			email,
		})
		// If the user exists, throw an error
		if (existingUser) {
			throw new Error('User already exists')
		}

		// Hash the password and store it in the database
		const hashPassword = bcryptjs.hash(password!, 10)

		// If the user does not exist, create a new user
		const newUser = await User.create({
			name,
			email,
			password: hashPassword,
		})

		// Create a session for the user and store it in the cookie
		await createSession(JSON.stringify(newUser._id))

		// Redirect the user to the home page
	} catch (error) {
		console.log(error)
	}
}

export const login = async (email: string, password: string) => {}
export const currentUser = async () => {}
