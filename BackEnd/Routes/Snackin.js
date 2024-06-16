import express from 'express';
import {
    getAllKategori, getKategoriById, addKategori, updateKategori, deleteKategori,
    getAllProduk, getProdukByID, addProduk, updateProduk, deleteProduk,
    getAllToko, getTokoByID, addToko, updateToko, deleteToko,
} from '../Controller/SnackinController.js';

const router = express.Router();

// Router Kategori
router.get('/kategori', getAllKategori);
router.get('/kategori/:id_kategori', getKategoriById);
router.post('/kategori', addKategori);
router.patch('/kategori/:id_kategori', updateKategori);
router.delete('/kategori/:id_kategori', deleteKategori);

// Router Produk
router.get('/produk', getAllProduk);
router.get('/produk/:id_produk', getProdukByID);
router.post('/produk', addProduk);
router.patch('/produk/:id_produk', updateProduk);
router.delete('/produk/:id_produk', deleteProduk);

// Router Pilihan Toko
router.get('/toko', getAllToko);
router.get('/toko/:id_toko', getTokoByID);
router.post('/toko', addToko);
router.patch('/toko/:id_toko', updateToko);
router.delete('/toko/:id_toko', deleteToko);

export default router;
