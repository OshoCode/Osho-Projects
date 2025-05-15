import mongoose from 'mongoose';
import { DB_URI } from '../config/env.js';

if (!DB_URI) {
    throw new Error('DB_URI is not defined in the environment variables');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
}
export default connectToDatabase;