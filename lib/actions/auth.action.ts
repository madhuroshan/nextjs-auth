'use server'

import User from '../database/models/user.model'
import bcryptjs from 'bcryptjs'
import { createSession, deleteSession } from '../session'
import { connectToMongoDB } from '../database/mongoose'
import { redirect } from 'next/navigation'

// SIGNUP
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
		const hashPassword = await bcryptjs.hash(password!, 10)

		// If the user does not exist, create a new user
		const newUser = await User.create({
			name,
			email,
			password: hashPassword,
		})

		// Create a session for the user and store it in the cookie
		await createSession(JSON.stringify(newUser._id))
	} catch (error) {
		console.log(error)
	}
	redirect('/')
}

// LOGIN
export const login = async (email: string, password: string) => {
	let isLoginSuccessful = false
	try {
		// Connect to the db
		await connectToMongoDB()

		// Check if the user exists with email
		const existingUser = await User.findOne({ email })

		// if yes, check for the password
		// get hashedpassword and decrypt it
		// compare it with input password

		if (existingUser) {
			const isPasswordValid = await bcryptjs.compare(
				password,
				existingUser.password
			)
			if (isPasswordValid) {
				// update the flag and create session
				isLoginSuccessful = true
				await createSession(JSON.stringify(existingUser._id))
			} else {
				// if it doesn't match, throw warning on screen
				return {
					message: 'Invalid Password, Try Again',
				}
			}
		} else {
			// if no, ask user to signup
			return { message: 'No User found, Please Sign Up' }
		}
	} catch (error) {
		console.log(error)
		isLoginSuccessful = false
	}

	// if it matches, redirect to homepage
	if (isLoginSuccessful) redirect('/')
}

// LOGOUT
export const logout = async () => {
	try {
		await deleteSession()
	} catch (error) {
		console.log('could not delete session', error)
	}
	redirect('/auth/login')
}

// CHECK CURRENT USER
export const currentUser = async () => {}
