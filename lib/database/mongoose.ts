import mongoose from 'mongoose'

export const connectToMongoDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URL!)

		console.log(`MongoDB connected: ${connection.connection.host}`)
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Error: ${error.message}`)
		} else {
			console.error('An unknown error occurred')
		}
	}
}
