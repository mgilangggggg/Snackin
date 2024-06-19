import { query } from '../Database/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// SignUp Controller
const signup = async (req, res) => {
    const { username, password, email, telepon } = req.body;

    if (!username || !password || !email || !telepon) {
        return res.status(400).json({ error: 'Field wajib diisi' });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: 'Password minimal 8 karakter' });
    }

    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);
        await query('insert into users(username, password, email, telepon) values (?, ?, ?, ?)', [username, hash, email, telepon]);

        return res.status(200).json({ username, hash, email, telepon });
    } catch (error) {
        return res.status(500).json({ error: 'Terjadi kesalahan', error });
    }
};

// SignIn Controller
const signin = async (req, res) => {
    const { email, password } = req.body;

    // Validasi Input
    if (!email || !password) {
        return res.status(400).json({ error: 'Email dan Password wajib diisi' });
    }

    try {
        // Validasi Email
        const [validation] = await query('select id_user from users where email=?', [email]);

        if (!validation) {
            return res.status(400).json({ error: 'Email Anda tidak ditemukan' });
        }

        const [user] = await query('select id_user, email, password from users where id_user=?', [validation.id_user]);
        if (!user) {
            return res.status(400).json({ error: 'User tidak ditemukan' });
        }

        // Cek kecocokan Password
        const isMatch = await bcrypt.compare(password, check.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Password salah' });
        }

        // JWT token
        const data = {
            id_user: user.id_user,
            email: user.email
        }

        jwt.sign(data, process.env.SECRETKEY, (err, token) => {
            if (err) {
                return res.status(500).json({ error: 'Terjadi kesalahan pada saat membuat token' });
            }
            return res.status(200).json({ Authorization: `Bearer ${token}` });
        });

    } catch (error) {
        return res.status(500).json({ error: 'Terjadi kesalahan' });
    }
};

// Reset Controller

export { signup, signin };
