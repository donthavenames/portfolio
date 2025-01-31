import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectToMongoDB();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ name: username });

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.send('Login successful');
    } else {
      res.status(401).send('Incorrect password');
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ name: username });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name: username, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
