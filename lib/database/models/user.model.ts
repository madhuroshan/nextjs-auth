import mongoose from 'mongoose'

export interface IUser {
	name: string
	email: string
	password: string
	bio?: string
	company?: string
	website?: string
}

export const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name'],
	},
	email: {
		type: String,
		required: [true, 'Please provide an email'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
	},
	bio: {
		type: String,
	},
	company: {
		type: String,
	},
	website: {
		type: String,
	},
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
