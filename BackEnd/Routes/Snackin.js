import express from 'express';
import { getAllKategori, getKategoriById, addKategori, updateKategori, deleteKategori, } from '../Controller/SnackinController.js';

const router = express.Router();

// Router Kategori
router.get('/kategori', getAllKategori);
router.get('/kategori/:id_kategori', getKategoriById);
router.post('/kategori', addKategori);
router.patch('/kategori/:id_kategori', updateKategori);
router.delete('/kategori/:id_kategori', deleteKategori);

// Router Produk
// router.get('/produk', getProduk);
// router.post('/produk', addProduk);
// router.patch('/produk/:id_produk', updateProduk);
// router.delete('/produk/:id_produk', deleteProduk);

// Router

export default router;
