import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

// @desc    Register new user
// @route   POST /api/auth/signup
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            res.status(400);
            throw new Error('Please include all fields');
        }

        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        const user = await User.create({ username, email, password });

        if (user) {
            generateTokenAndSetCookie(res, user._id);
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            generateTokenAndSetCookie(res, user._id);
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio,
                isAdmin: user.isAdmin
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Log user out / clear cookie
// @route   POST /api/auth/logout
export const logout = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Delete account
// @route   DELETE /api/auth/delete-account
export const deleteAccount = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        next(error);
    }
};