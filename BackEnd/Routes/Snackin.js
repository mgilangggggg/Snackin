import express from 'express';
import { getKategori, addKategori, updateKategori, deleteKategori, getProduk, addProduk, updateProduk, deleteProduk } from '../Controller/SnackinController.js';

const router = express.Router();

// Router Kategori
router.get('/kategori', getKategori);
router.post('/kategori', addKategori);
router.patch('/kategori/:id_kategori', updateKategori);
router.delete('/kategori/:id_kategori', deleteKategori);

// Router Produk
router.get('/produk', getProduk);
router.post('/produk', addProduk);
router.patch('/produk/:id_produk', updateProduk);
router.delete('/produk/:id_produk', deleteProduk);

// Router 

export default router;
