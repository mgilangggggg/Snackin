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
        await query('INSERT INTO users (username, password, email, telepon) VALUES (?, ?, ?, ?)', [username, hash, email, telepon]);

        return res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Terjadi kesalahan', detail: error.message });
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
        const [validation] = await query('SELECT id_user FROM users WHERE email=?', [email]);

        if (!validation) {
            return res.status(400).json({ error: 'Email Anda tidak ditemukan' });
        }

        const [user] = await query('SELECT id_user, email, password FROM users WHERE id_user=?', [validation.id_user]);
        if (!user) {
            return res.status(400).json({ error: 'User tidak ditemukan' });
        }

        // Cek kecocokan Password
        const isMatch = await bcrypt.compare(password, user.password);
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

// Get SignIn
export const getUsers = async (req, res) => {
    try {
        const results = await query(`select * from users`);
        return res.status(200).json({ success: true, data: results });
    } catch {
        console.error('Terjadi Kesalahan');
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Get By Id
// export const getUserById = async (req, res) => {
//     const { id_user } = req.params

//     try {
//         const results = await query(`select * from users where id_user = ?`, [id_user]);

//         if (results.length === 0) {
//             return res.status(404).json({ success: false, msg: 'Kategori tidak ditemukan' });
//         }

//         const user = results[0];

//         return res.status(200).json({ success: true, data: user })
//     } catch (e) {
//         console.error('Terjadi kesalahan', e);
//         return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
//     }
// };

export { signup, signin };