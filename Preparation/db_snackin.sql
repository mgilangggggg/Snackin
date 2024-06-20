-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2024 at 04:10 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_snackin`
--

-- --------------------------------------------------------

--
-- Table structure for table `carousel`
--

CREATE TABLE `carousel` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carousel`
--

INSERT INTO `carousel` (`id`, `image`) VALUES
(1, 'Carousel/1.png'),
(2, 'Carousel/2.png'),
(3, 'Carousel/3.png'),
(4, 'Carousel/4.png');

-- --------------------------------------------------------

--
-- Table structure for table `detail_produk`
--

CREATE TABLE `detail_produk` (
  `id_detail_produk` int(11) NOT NULL,
  `photo_produk` varchar(255) NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `deskripsi_produk` varchar(100) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `harga_produk` decimal(10,2) DEFAULT NULL,
  `diskon_produk` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detail_produk`
--

INSERT INTO `detail_produk` (`id_detail_produk`, `photo_produk`, `nama_produk`, `deskripsi_produk`, `rating`, `harga_produk`, `diskon_produk`, `id_produk`) VALUES
(1, '      /Product/Basreng.png\n      /Product/Basreng-Sajodo.png\n      /Product/Basreng-Sulah-Viral.png', 'Basreng Sulah Viral 500gram pedas', 'Basreng pedas yang berkualitas, tersedia dalam berbagai pilihan rasa.', 4, 30000.00, 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `photo_kategori` varchar(255) DEFAULT NULL,
  `nama_kategori` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `photo_kategori`, `nama_kategori`) VALUES
(1, 'Category-Product/1.jpg', 'Keripik & Kerupuk'),
(2, 'Category-Product/2.jpg', 'Kue & Biskuit'),
(3, 'Category-Product/3.jpg', 'Premen & Manisan'),
(4, 'Category-Product/4.jpg', 'Kacang'),
(5, 'Category-Product/5.jpg', 'Minuman'),
(6, 'Category-Product/6.jpg', 'Oleh - Oleh'),
(7, 'Category-Product/7.jpg', 'Camilan Tradisional'),
(8, 'Category-Product/8.jpg', 'Camilan Sehat'),
(9, 'Category-Product/9.png', 'Best Seller'),
(10, 'Category-Product/10.png', 'Lainnya');

-- --------------------------------------------------------

--
-- Table structure for table `keranjang_belanja`
--

CREATE TABLE `keranjang_belanja` (
  `id_keranjang` int(11) NOT NULL,
  `photo_produk` varchar(255) NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `varian_produk` varchar(100) NOT NULL,
  `harga_produk` decimal(10,2) DEFAULT NULL,
  `kuantitas` int(11) DEFAULT NULL,
  `total_harga` decimal(10,2) DEFAULT NULL,
  `id_detail_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `keranjang_belanja`
--

INSERT INTO `keranjang_belanja` (`id_keranjang`, `photo_produk`, `nama_produk`, `varian_produk`, `harga_produk`, `kuantitas`, `total_harga`, `id_detail_produk`) VALUES
(1, 'Product/Basreng-Sajodo.png', 'Basreng Pedas Viral', 'Pedas Manis/250 gr', 15000.00, 1, 15000.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id_order_item` int(11) NOT NULL,
  `kuantitas` int(11) DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `id_order` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id_pembayaran` int(11) NOT NULL,
  `tanggal_pembayaran` datetime DEFAULT NULL,
  `jumlah_pembayaran` decimal(10,2) DEFAULT NULL,
  `metode_pembayaran` varchar(50) DEFAULT NULL,
  `id_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengaturan`
--

CREATE TABLE `pengaturan` (
  `id_pengaturan` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email_pengguna` varchar(100) DEFAULT NULL,
  `photo_bank` varchar(255) NOT NULL,
  `no_rek` varchar(20) DEFAULT NULL,
  `kuantitas` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penghasilan`
--

CREATE TABLE `penghasilan` (
  `id_penghasilan` int(11) NOT NULL,
  `jumlah_pemasukan` decimal(10,2) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `id_toko` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan`
--

CREATE TABLE `penjualan` (
  `id_penjualan` int(11) NOT NULL,
  `kuantitas_terjual` int(11) DEFAULT NULL,
  `tanggal_penjualan` datetime DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `id_pesanan` int(11) NOT NULL,
  `kuantitas` int(11) DEFAULT NULL,
  `total_harga` decimal(10,2) DEFAULT NULL,
  `tanggal_pesan` datetime DEFAULT NULL,
  `status` enum('Kemas','Kirim','Selesai') DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `photo_produk` varchar(255) DEFAULT NULL,
  `nama_produk` varchar(100) DEFAULT NULL,
  `harga_produk` decimal(10,2) DEFAULT NULL,
  `diskon_produk` decimal(5,2) DEFAULT NULL,
  `lokasi_produk` varchar(255) DEFAULT NULL,
  `rating_produk` int(11) DEFAULT NULL,
  `produk_terjual` int(11) DEFAULT NULL,
  `deskripsi_produk` text DEFAULT NULL,
  `detail_produk` text DEFAULT NULL,
  `stok_produk` int(11) DEFAULT NULL,
  `varian_produk` varchar(255) DEFAULT NULL,
  `berat_produk` decimal(10,2) DEFAULT NULL,
  `id_toko` int(11) DEFAULT NULL,
  `id_kategori` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `photo_produk`, `nama_produk`, `harga_produk`, `diskon_produk`, `lokasi_produk`, `rating_produk`, `produk_terjual`, `deskripsi_produk`, `detail_produk`, `stok_produk`, `varian_produk`, `berat_produk`, `id_toko`, `id_kategori`) VALUES
(1, 'Product/Basreng.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(6, 'Product/Aneka-Kue-Kering.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\nBasreng Pedas\nBasreng Pedas Manis\nBasreng Pedas Daun Jeruk\nBasreng Ekstra Pedas\nBasreng Original\n\nKemasan yang Tersedia:\n250 gram\n500 gram\n1 kilogram\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 2),
(7, 'Product/Basreng-Sajodo.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\nBasreng Pedas\nBasreng Pedas Manis\nBasreng Pedas Daun Jeruk\nBasreng Ekstra Pedas\nBasreng Original\n\nKemasan yang Tersedia:\n250 gram\n500 gram\n1 kilogram\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 2),
(8, 'Product/Cookies-Coklat.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 4),
(9, 'Product/Donat.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 5),
(10, 'Product/Gemlong-Pedas.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(11, 'Product/GG-SUS.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(12, 'Product/Kacang-Polong.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(13, 'Product/Kacang-Sangrai.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(14, 'Product/Keripik-Kaca.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(15, 'Product/Keripik-Kentang-Balado.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(16, 'Product/Kerupuk-Kulit.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(17, 'Product/Kerupuk-Seblak.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(18, 'Product/Kue-Kering.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(19, 'Product/Kuping-Gajah.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(20, 'Product/Kuping-Mini.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(21, 'Product/Makroni-Usus.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(22, 'Product/Nastar-Nanas.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(23, 'Product/Nastar-Premium.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(24, 'Product/Pisang-Dolar.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(25, 'Product/Sale-Lidah.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(26, 'Product/Sale-Lilit.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(27, 'Product/Singkong-Balado.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1),
(28, 'Product/Singkong-Original.png', 'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg', 15000.00, 12.00, 'Kab. Majalengka', 4, 100, 'Basreng Pedas Gurih daun jeruk, ini cemilan yang saaangaat nikmat., pedas dan bikin nagihhh, Cocok menemani kamu dalam situasi apapun, kemasan1kg', 'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!', 50, 'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original', 1000.00, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `promosi`
--

CREATE TABLE `promosi` (
  `id_promosi` int(11) NOT NULL,
  `diskon_persentase` decimal(5,2) DEFAULT NULL,
  `tanggal_mulai` date DEFAULT NULL,
  `tanggal_akhir` date DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id_review` int(11) NOT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `komentar` text DEFAULT NULL,
  `tanggal_review` datetime DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stok`
--

CREATE TABLE `stok` (
  `id_stok` int(11) NOT NULL,
  `kuantitas` int(11) DEFAULT NULL,
  `terakhir_diperbarui` datetime DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `toko`
--

CREATE TABLE `toko` (
  `id_toko` int(11) NOT NULL,
  `photo_toko` varchar(255) DEFAULT NULL,
  `nama_toko` varchar(100) NOT NULL,
  `alamat_toko` varchar(255) DEFAULT NULL,
  `deskripsi_toko` text DEFAULT NULL,
  `rating_toko` decimal(3,2) DEFAULT NULL,
  `ulasan_toko` text DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `toko`
--

INSERT INTO `toko` (`id_toko`, `photo_toko`, `nama_toko`, `alamat_toko`, `deskripsi_toko`, `rating_toko`, `ulasan_toko`, `id_user`) VALUES
(1, 'Toko/Grosir-Jajanan.png', 'Grosir Jajanan Murah', 'Sukabumi', '\r\nKami menjual cemilan jajanan jadoel hingga kekinian, oleh oleh Bandung dan masih banyak lagi. \r\n\r\nHari Minggu /Tgl Merah Tutup.\r\n\r\nSemua produk sudah free packing bubble wrap dan kardus (bila diperlukan).\r\n\r\nApabila sampai ke tujuan ada kerusakan, keterlambatan, pecah, bolong,  dapat dilakukan komplain langsung ke pihak ekspedisi (JNE, dsb). \r\nDengan melakukan transaksi di toko kami berati anda setuju dengan aturan kami sekalipun anda tidak membaca aturan.\r\n\r\nSelamat ngemil :)', 4.00, '120', NULL),
(2, 'Toko/Gumilang-Snack.png', 'Gumilang Snack', 'Perbatasan Ciamis - Majalengka, Jawa Barat', 'Gumilang Snack adalah toko yang menjual berbagai macam makanan ringan dan oleh-oleh tradisional khas Jawa Barat. Kami menjual berbagai pilihan makanan ringan secara ecer dan juga grosir, kami juga mengedepankan kualitas produk kami, kualitas produk yang kami jual dijamin sebanding dengan harga.', 4.00, '180', NULL),
(3, 'Toko/Maicih.png', 'Maicih', 'Jalan Primaraga 6 Jl. Cingised, Cisaranten Endah, Kec. Arcamanik, Kota Bandung, Jawa Barat 40293', 'Berawal dari kegemaran Bob Merdeka dan Meiry Anwar yang suka makan keripik singkong pedas dari sejak remaja. Di tahun 2010, mereka membeli keripik singkong kiloan yang dibumbui sendiri dan dikemas ulang lalu dipasarkan dengan merek Maicih. Kemudian perlahan mereka mempelajari bagaimana cara memproduksi keripik sendiri, sampai Maicih memiliki beberapa varian produk selain keripik singkong, seperti basreng, batagor instan, dan keripik talas. Kini, setelah lebih dari satu dekade, semua produk Maicih sudah dipasarkan di lebih dari sepuluh negara.', 4.00, '200', NULL),
(4, 'Toko/Cemilan-Mini.png', 'Nenden.sulastri06', 'jl. aja', 'Selamat datang di toko seblak bandung Dua dara.. kami menyediakan berbagai macam cemilan khas bandung pedas gurih.. produsen tangan pertama sehingga harga nya cocok untuk di jual kembali.. kami produksi langsung , ada yang pesan langsung produksi jadi jangan khawatir  dengan kualitas cemilan kami tanpa bahan pengawet dan dgn menggunakan bumbu pilihan yg dibuat sendiri bukan bumbu instan yg ditabur\r\n terimakasih..😊', 4.00, '190', NULL),
(5, 'Toko/Sajodo-Snack.png', 'Sajodo Snack', 'Jl. Leuwidahu, Indihiang, Kec. Indihiang, Kab. Tasikmalaya, Jawa Barat 46151', 'BASRENG SAJODO SNACK & FOOD\r\nBasreng Sajodo Snack & Food merupakan Olahan Ikan Kuniran/Tenggiri dan Tepung pilihan yang diracik oleh tangan-tangan ahli, dimasak dengan suhu terbaik dan diberikan bumbu kualitas terbaik khas Sajodo Snack & Food.\r\n', 4.00, '210', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `is_shop` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `email`, `alamat`, `telepon`, `is_shop`) VALUES
(10, 'abdul', '$2b$12$32VKA5dDkkTLf4opRznwp.lq/Zkwl7rbxj26GVfANtenVrwhcZ9qC', 'abdul@gmail.com', NULL, '0833333333', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carousel`
--
ALTER TABLE `carousel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_produk`
--
ALTER TABLE `detail_produk`
  ADD PRIMARY KEY (`id_detail_produk`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja`
  ADD PRIMARY KEY (`id_keranjang`),
  ADD KEY `id_detail_produk` (`id_detail_produk`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id_order_item`),
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD KEY `id_order` (`id_order`);

--
-- Indexes for table `pengaturan`
--
ALTER TABLE `pengaturan`
  ADD PRIMARY KEY (`id_pengaturan`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `penghasilan`
--
ALTER TABLE `penghasilan`
  ADD PRIMARY KEY (`id_penghasilan`),
  ADD KEY `id_toko` (`id_toko`);

--
-- Indexes for table `penjualan`
--
ALTER TABLE `penjualan`
  ADD PRIMARY KEY (`id_penjualan`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`id_pesanan`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD KEY `id_toko` (`id_toko`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `promosi`
--
ALTER TABLE `promosi`
  ADD PRIMARY KEY (`id_promosi`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`id_stok`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `toko`
--
ALTER TABLE `toko`
  ADD PRIMARY KEY (`id_toko`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carousel`
--
ALTER TABLE `carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail_produk`
--
ALTER TABLE `detail_produk`
  MODIFY `id_detail_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja`
  MODIFY `id_keranjang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id_order_item` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengaturan`
--
ALTER TABLE `pengaturan`
  MODIFY `id_pengaturan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penghasilan`
--
ALTER TABLE `penghasilan`
  MODIFY `id_penghasilan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan`
--
ALTER TABLE `penjualan`
  MODIFY `id_penjualan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `id_pesanan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `promosi`
--
ALTER TABLE `promosi`
  MODIFY `id_promosi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stok`
--
ALTER TABLE `stok`
  MODIFY `id_stok` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `toko`
--
ALTER TABLE `toko`
  MODIFY `id_toko` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_produk`
--
ALTER TABLE `detail_produk`
  ADD CONSTRAINT `detail_produk_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja`
  ADD CONSTRAINT `keranjang_belanja_ibfk_1` FOREIGN KEY (`id_detail_produk`) REFERENCES `detail_produk` (`id_detail_produk`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `pesanan` (`id_pesanan`),
  ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `pesanan` (`id_pesanan`);

--
-- Constraints for table `pengaturan`
--
ALTER TABLE `pengaturan`
  ADD CONSTRAINT `pengaturan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);

--
-- Constraints for table `penghasilan`
--
ALTER TABLE `penghasilan`
  ADD CONSTRAINT `penghasilan_ibfk_1` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`);

--
-- Constraints for table `penjualan`
--
ALTER TABLE `penjualan`
  ADD CONSTRAINT `penjualan_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD CONSTRAINT `pesanan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `pesanan_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`),
  ADD CONSTRAINT `produk_ibfk_2` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`);

--
-- Constraints for table `promosi`
--
ALTER TABLE `promosi`
  ADD CONSTRAINT `promosi_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `stok`
--
ALTER TABLE `stok`
  ADD CONSTRAINT `stok_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `toko`
--
ALTER TABLE `toko`
  ADD CONSTRAINT `toko_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
