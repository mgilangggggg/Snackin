import { query } from '../Database/db.js';
// Carousel Controller
// Get All
export const getAllCarousel = async (req, res) => {
    try {
        const results = await query(`select * from carousel`);
        return res.status(200).json({ success: true, data: results });
    } catch {
        console.error('Terjadi Kesalahan');
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Add
export const addCarousel = async (req, res) => {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const result = await query(`insert into carousel (image) values (?)`, [
            image
        ]);
        return res.status(200).json({ success: true, data: { id: result.insertId, image } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi Kesalahan pada server' });
    }
}

// Delete
export const updateCarousel = async (req, res) => {
    const { id } = req.params
    const { image } = req.body

    if (!image) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const results = await query(`update carousel set image = ? where id = ?`, [image, id]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, msg: 'Image tidak ditemukan' });
        }
        return res.status(200).json({ success: true, data: { id, image } });

    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Delete
export const deleteCarousel = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await query(`select * from carousel where id = ?`, [id]);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Image tidak ditemukan' });
        }

        await query(`delete from carousel where id = ?`, [id]);
        return res.status(200).json({ success: true, msg: 'Image berhasil dihapus' });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};
// End Carousel Controller

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

// Get By Id
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


// Add
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

// Update
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

// Delete
export const deleteKategori = async (req, res) => {
    const { id_kategori } = req.params;
    try {
        const [result] = await query(`select * from kategori where id_kategori = ?`, [id_kategori]);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Produk tidak ditemukan' });
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
// Get All
export const getAllProduk = async (req, res) => {
    try {
        const result = await query(`select * from produk`);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.error('Terjadi Kesalahan', e);
        return res.status(500).json({ success: true, msg: 'Terjadi kesalahan pada server' });
    }
};

// Get By Id
export const getProdukByID = async (req, res) => {
    const { id_produk } = req.params

    try {
        const result = await query(`select * from produk where id_produk = ?`, [id_produk]);

        if (result.length === 0) {
            return res.status(404).json({ success: false, msg: 'Produk tidak ditemukan' });
        }

        const produk = result[0];

        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.error('Terjadi Kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Add
export const addProduk = async (req, res) => {
    const { photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori
    } = req.body;

    if (!photo_produk || !nama_produk || !harga_produk || !diskon_produk || !lokasi_produk || !rating_produk || !produk_terjual || !deskripsi_produk || !detail_produk || !stok_produk || !varian_produk || !berat_produk || !id_toko || !id_kategori) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const result = await query(`insert into produk (photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori
        ]);
        return res.status(200).json({ success: true, data: { id_produk: result.insertId, photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_toko, id_kategori } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Update
export const updateProduk = async (req, res) => {
    const { id_produk } = req.params;
    const { photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk } = req.body;

    if (!photo_produk || !nama_produk || !harga_produk || !diskon_produk || !lokasi_produk || !rating_produk || !produk_terjual || !deskripsi_produk || !detail_produk || !stok_produk || !varian_produk || !berat_produk) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const result = await query(`update produk set photo_produk = ?, nama_produk = ?, harga_produk = ?, diskon_produk = ?, lokasi_produk = ?, rating_produk = ?, produk_terjual = ?, deskripsi_produk = ?, detail_produk = ?, stok_produk = ?, varian_produk = ?, berat_produk = ? where id_produk = ?`, [photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk, id_produk]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, msg: 'Produk tidak ditemukan' });
        }
        return res.status(200).json({ success: true, data: { id_produk, photo_produk, nama_produk, harga_produk, diskon_produk, lokasi_produk, rating_produk, produk_terjual, deskripsi_produk, detail_produk, stok_produk, varian_produk, berat_produk } });

    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
}

// Delete
export const deleteProduk = async (req, res) => {
    const { id_produk } = req.params;
    try {
        const [result] = await query(`select * from produk where id_produk = ?`, [id_produk]);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Produk tidak ditemukan' });
        }

        await query(`delete from produk where id_produk = ?`, [id_produk]);
        return res.status(200).json({ success: true, msg: 'Produk berhasil dihapus' });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: true, msg: 'Terjadi kesalahan pada server' });
    }
};
// End Produk Controller

// Pilihan Toko Controller
// Get All
export const getAllToko = async (req, res) => {
    try {
        const result = await query(`select * from toko`);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.error('Terjadi Kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' })
    }
};

// Get By Id
export const getTokoByID = async (req, res) => {
    const { id_toko } = req.params

    try {
        const result = await query(`select * from toko where id_toko = ?`, [id_toko]);

        if (result.length === 0) {
            return res.status(404).json({ success: false, msg: 'Toko tidak ditemukan' });
        }

        const produk = result[0];

        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.error('Terjadi Kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Add
export const addToko = async (req, res) => {
    const { photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user
    } = req.body;

    if (!photo_toko || !nama_toko || !alamat_toko || !deskripsi_toko || !rating_toko || !ulasan_toko || !id_user) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const result = await query(`insert into toko (photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user) values (?, ?, ?, ?, ?, ?, ?)`, [
            photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user
        ]);
        return res.status(200).json({ success: true, data: { id_produk: result.insertId, photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Update
export const updateToko = async (req, res) => {
    const { id_toko } = req.params;
    const { photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user
    } = req.body;

    if (!photo_toko || !nama_toko || !alamat_toko || !deskripsi_toko || !rating_toko || !ulasan_toko || !id_user) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const results = await query(`update toko set photo_toko = ?, nama_toko = ?, alamat_toko = ?, deskripsi_toko = ?, rating_toko = ?, ulasan_toko = ? where id_toko = ?`, [
            photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_toko
        ]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, msg: 'Toko tidak ditemukan' });
        }
        return res.status(200).json({ success: true, data: { id_toko, photo_toko, nama_toko, alamat_toko, deskripsi_toko, rating_toko, ulasan_toko, id_user } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Delete
export const deleteToko = async (req, res) => {
    const { id_toko } = req.params;
    try {
        const [result] = await query(`select * from toko where id_toko = ?`, [id_toko]);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Toko tidak ditemukan' });
        }

        await query(`delete from toko where id_toko = ?`, [id_toko]);
        return res.status(200).json({ success: true, msg: 'Toko berhasil dihapus' });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: true, msg: 'Terjadi kesalahan pada server' });
    }
};
// End Pilihan Toko Controller

// Keranjang Belanja Controller
// Get
export const getCart = async (req, res) => {
    try {
        const results = await query(`select * from keranjang_belanja`);
        return res.status(200).json({ success: true, data: results });
    } catch {
        console.error('Terjadi Kesalahan');
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Add
export const addCard = async (req, res) => {
    const { photo_produk, nama_produk, varian_produk, harga_produk, kuantitas, total_harga } = req.body;

    if (!photo_produk || !nama_produk || !varian_produk || !harga_produk || !kuantitas || !total_harga) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }


    try {
        const result = await query(`insert into keranjang_belanja (photo_produk, nama_produk, varian_produk, harga_produk, kuantitas, total_harga) values (?, ?, ?, ?, ?, ?)`, [
            photo_produk, nama_produk, varian_produk, harga_produk, kuantitas, total_harga
        ]);
        return res.status(200).json({ success: true, data: { id: result.insertId, photo_produk, nama_produk, varian_produk, harga_produk, kuantitas, total_harga } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi Kesalahan pada server' });
    }
}
// End Keranjang Belanja Controller

// Detail Produk Controller
// Get
export const getDetailProduk = async (req, res) => {
    try {
        const results = await query(`select * from detail_produk`);
        return res.status(200).json({ success: true, data: results });
    } catch {
        console.error('Terjadi Kesalahan');
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};
