import { query } from '../Database/db.js';

// Kategori Controller
// Get All
export const getAllKategori = async (req, res) => {
    try {
        const results = await query(`select * from kategori`);
        return res.status(200).json({ success: true, data: results });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Get Kategori By Id
export const getKategoriById = async (req, res) => {
    const { id_kategori } = req.params

    try {
        const results = await query(`select * from kategori where id_kategori = ?`, [id_kategori]);

        if (results.length === 0) {
            return res.status(404).json({ success: false, msg: 'Kategori tidak ditemukan' });
        }

        const kategori = results[0];

        return res.status(200).json({ success: true, data: kategori })
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};


// Add Kategori
export const addKategori = async (req, res) => {
    const { photo_kategori, nama_kategori } = req.body;

    if (!photo_kategori || !nama_kategori) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const result = await query(`insert into kategori (photo_kategori, nama_kategori) values (?, ?)`, [
            photo_kategori, nama_kategori
        ]);
        return res.status(200).json({ success: true, data: { id_kategori: result.insertId, photo_kategori, nama_kategori } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi Kesalahan pada server' });
    }
};

// Update Kategori
export const updateKategori = async (req, res) => {
    const { id_kategori } = req.params
    const { photo_kategori, nama_kategori } = req.body

    if (!photo_kategori || !nama_kategori) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const results = await query(`update kategori set photo_kategori = ?, nama_kategori = ? where id_kategori = ?`, [photo_kategori, nama_kategori, id_kategori]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, msg: 'Kategori tidak ditemukan' });
        }
        return res.status(200).json({ success: true, data: { id_kategori, photo_kategori, nama_kategori } });

    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Delete Kategori
export const deleteKategori = async (req, res) => {
    const { id_kategori } = req.params;
    try {
        const [result] = await query(`select * from kategori where id_kategori = ?`, [id_kategori]);
        if (!result) {
            return res.status(404).json({ msg: 'Kategori tidak ditemukan' });
        }

        await query(`delete from kategori where id_kategori = ?`, [id_kategori]);
        return res.status(200).json({ success: true, msg: 'Kategori berhasil dihapus' });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};
// End Kategori Controller

// Produk Controller
// Get Produk
// export const getProduk = async (req, res) => {
//     try {
//         const produk = await query(`select * from produk`);
//         return res.status(200).json({ success: true, data: produk });
//     } catch (e) {
//         console.error('Terjadi Kesalahan', e);
//         return res.status(500).json({ msg: 'Terjadi kesalahan pada server' });
//     }
// };

// Add Produk
// export const addProduk = async (req, res) => {
//     const { id_produk, photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori
//     } = req.body;

//     if (!id_produk || !photo_produk || !nama_produk || !harga_produk || !diskon_produk || !lokasi_produk || !rating_produk || !produk_terjual || !deskripsi_produk || !detail_produk || !stok_produk || !varian_produk || !berat_produk || !id_toko || !id_kategori) {
//         return res.status(400).json({ msg: 'Semua field harus diisi' });
//     }

//     try {
//         await query(`insert into produk (id_produk, photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
//             id_produk, photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori
//         ]);

//         return res.status(200).json({ msg: 'Produk berhasil ditambahkan' });
//     } catch (e) {
//         console.error('Terjadi kesalahan', e);
//         return res.status(500).json({ msg: 'Terjadi kesalahan pada server' });
//     }
// };

// Update Produk
// export const updateProduk = async (req, res) => {
//     const { id_produk } = req.params;
//     const { photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk } = req.body;

//     if (!photo_produk || !nama_produk || !harga_produk || !diskon_produk || !lokasi_produk || !rating_produk || !produk_terjual || !deskripsi_produk || !detail_produk || !stok_produk || !varian_produk || !berat_produk) {
//         return res.status(400).json({ msg: 'Semua field harus diisi' });
//     }

//     try {
//         const [produk] = await query(`select * from produk where id_produk = ?`, [id_produk]);
//         if (!produk) {
//             return res.status(404).json({ msg: 'Produk tidak ditemukan' });
//         }

//         await query(`update produk set photo_produk = ?, nama_produk = ?, harga_produk = ?, diskon_produk = ?, lokasi_produk = ?, rating_produk = ?, produk_terjual = ?, deskripsi_produk = ?, detail_produk = ?, stok_produk = ?, varian_produk = ?, berat_produk = ? where id_produk = ?`, [photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_produk]);
//         return res.status(200).json({ msg: 'Produk berhasil di Update' });
//     } catch (e) {
//         console.error('Terjadi kesalahan', e);
//         return res.status(500).json({ msg: 'Terjadi kesalahan pada server' });
//     }
// }

// Delete Produk
// export const deleteProduk = async (req, res) => {
//     const { id_produk } = req.params;
//     try {
//         const [produk] = await query(`select * from produk where id_produk = ?`, [id_produk]);
//         if (!produk) {
//             return res.status(404).json({ msg: 'produk tidak ditemukan' });
//         }

//         await query(`delete from produk where id_produk = ?`, [id_produk]);
//         return res.status(200).json({ msg: 'Produk berhasil dihapus' });
//     } catch (e) {
//         console.error('Terjadi kesalahan', e);
//         return res.status(500).json({ msg: 'Terjadi kesalahan pada server' });
//     }
// };
// End Produk Controller

// Toko Controller
// End Toko Controller