-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 23, 2024 at 03:07 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

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
CREATE TABLE
  `carousel` (
    `id` int NOT NULL,
    `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `carousel`
--
INSERT INTO
  `carousel` (`id`, `image`)
VALUES
  (1, 'Carousel/1.png'),
  (2, 'Carousel/2.png'),
  (3, 'Carousel/3.png'),
  (4, 'Carousel/4.png');

-- --------------------------------------------------------
--
-- Table structure for table `detail_produk`
--
CREATE TABLE
  `detail_produk` (
    `id_detail_produk` int NOT NULL,
    `photo_produk` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
    `nama_produk` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `deskripsi_produk` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `rating` int DEFAULT NULL,
    `harga_produk` decimal(10, 2) DEFAULT NULL,
    `diskon_produk` int DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `detail_produk`
--
INSERT INTO
  `detail_produk` (
    `id_detail_produk`,
    `photo_produk`,
    `nama_produk`,
    `deskripsi_produk`,
    `rating`,
    `harga_produk`,
    `diskon_produk`,
    `id_produk`
  )
VALUES
  (
    1,
    '      /Product/Basreng.png\n      /Product/Basreng-Sajodo.png\n      /Product/Basreng-Sulah-Viral.png',
    'Basreng Sulah Viral 500gram pedas',
    'Basreng pedas yang berkualitas, tersedia dalam berbagai pilihan rasa.',
    4,
    '30000.00',
    12,
    1
  );

-- --------------------------------------------------------
--
-- Table structure for table `kategori`
--
CREATE TABLE
  `kategori` (
    `id_kategori` int NOT NULL,
    `photo_kategori` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `nama_kategori` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--
INSERT INTO
  `kategori` (`id_kategori`, `photo_kategori`, `nama_kategori`)
VALUES
  (1, 'Category-Product/1.jpg', 'Keripik & Kerupuk'),
  (2, 'Category-Product/2.jpg', 'Kue & Biskuit'),
  (3, 'Category-Product/3.jpg', 'Premen & Manisan'),
  (4, 'Category-Product/4.jpg', 'Kacang'),
  (5, 'Category-Product/5.jpg', 'Minuman'),
  (6, 'Category-Product/6.jpg', 'Oleh - Oleh'),
  (
    7,
    'Category-Product/7.jpg',
    'Camilan Tradisional'
  ),
  (8, 'Category-Product/8.jpg', 'Camilan Sehat'),
  (9, 'Category-Product/9.png', 'Best Seller'),
  (10, 'Category-Product/10.png', 'Lainnya');

-- --------------------------------------------------------
--
-- Table structure for table `keranjang_belanja`
--
CREATE TABLE
  `keranjang_belanja` (
    `id_keranjang` int NOT NULL,
    `photo_produk` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
    `nama_produk` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `varian_produk` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `harga_produk` decimal(10, 2) DEFAULT NULL,
    `kuantitas` int DEFAULT NULL,
    `total_harga` decimal(10, 2) DEFAULT NULL,
    `id_detail_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `keranjang_belanja`
--
INSERT INTO
  `keranjang_belanja` (
    `id_keranjang`,
    `photo_produk`,
    `nama_produk`,
    `varian_produk`,
    `harga_produk`,
    `kuantitas`,
    `total_harga`,
    `id_detail_produk`
  )
VALUES
  (
    1,
    'Product/Basreng-Sajodo.png',
    'Basreng Pedas Viral',
    'Pedas Manis/250 gr',
    '15000.00',
    1,
    '15000.00',
    1
  );

-- --------------------------------------------------------
--
-- Table structure for table `order_item`
--
CREATE TABLE
  `order_item` (
    `id_order_item` int NOT NULL,
    `kuantitas` int DEFAULT NULL,
    `harga` decimal(10, 2) DEFAULT NULL,
    `id_order` int DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `pembayaran`
--
CREATE TABLE
  `pembayaran` (
    `id_pembayaran` int NOT NULL,
    `tanggal_pembayaran` datetime DEFAULT NULL,
    `jumlah_pembayaran` decimal(10, 2) DEFAULT NULL,
    `metode_pembayaran` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `id_order` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `pengaturan`
--
CREATE TABLE
  `pengaturan` (
    `id_pengaturan` int NOT NULL,
    `nama` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `email_pengguna` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `photo_bank` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
    `no_rek` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `kuantitas` int DEFAULT NULL,
    `id_user` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `penghasilan`
--
CREATE TABLE
  `penghasilan` (
    `id_penghasilan` int NOT NULL,
    `jumlah_pemasukan` decimal(10, 2) DEFAULT NULL,
    `tanggal` date DEFAULT NULL,
    `id_toko` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `penjualan`
--
CREATE TABLE
  `penjualan` (
    `id_penjualan` int NOT NULL,
    `kuantitas_terjual` int DEFAULT NULL,
    `tanggal_penjualan` datetime DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `pesanan`
--
CREATE TABLE
  `pesanan` (
    `id_pesanan` int NOT NULL,
    `kuantitas` int DEFAULT NULL,
    `total_harga` decimal(10, 2) DEFAULT NULL,
    `tanggal_pesan` datetime DEFAULT NULL,
    `status` enum ('Kemas', 'Kirim', 'Selesai') COLLATE utf8mb4_general_ci DEFAULT NULL,
    `id_user` int DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `produk`
--
CREATE TABLE
  `produk` (
    `id_produk` int NOT NULL,
    `photo_produk` varchar(255) DEFAULT NULL,
    `nama_produk` varchar(100) DEFAULT NULL,
    `harga_produk` decimal(10, 2) DEFAULT NULL,
    `diskon_produk` decimal(5, 2) DEFAULT NULL,
    `lokasi_produk` varchar(255) DEFAULT NULL,
    `rating_produk` int DEFAULT NULL,
    `produk_terjual` int DEFAULT NULL,
    `deskripsi_produk` text,
    `detail_produk` text,
    `stok_produk` int DEFAULT NULL,
    `varian_produk` varchar(255) DEFAULT NULL,
    `berat_produk` decimal(10, 2) DEFAULT NULL,
    `id_toko` int DEFAULT NULL,
    `id_kategori` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produk`
--
INSERT INTO
  `produk` (
    `id_produk`,
    `photo_produk`,
    `nama_produk`,
    `harga_produk`,
    `diskon_produk`,
    `lokasi_produk`,
    `rating_produk`,
    `produk_terjual`,
    `deskripsi_produk`,
    `detail_produk`,
    `stok_produk`,
    `varian_produk`,
    `berat_produk`,
    `id_toko`,
    `id_kategori`
  )
VALUES
  (
    1,
    'Product/Basreng.png',
    'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg',
    '15000.00',
    '12.00',
    'Kab. Majalengka',
    5,
    160,
    'Basreng viral Extra daun jeruk/ pedas/ gurih/ 1kg\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nBasreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    64,
    'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original',
    '1000.00',
    2,
    1
  ),
  (
    2,
    'Product/Aneka-Kue-Kering.png',
    'Aneka Kue Kering/ Manis/ gurih/ 1kg',
    '20000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    140,
    'Kami menjual berbagai macam produk kue kering dengan harga yang kompetitif dan RASA yang sesuai dengan keinginan Anda. \r\n\r\nDengan kualitas dan mutu yang terjamin dan 100% halal.\r\n\r\nAneka kue kering produksi rumahan dibuat oleh tangan-tangan ahli pembuat kue sehingga rasa dan kwalitas dijamin enak dan lembut\r\n\r\nJika mau pesan dengan jumlah yg banyak silahkan hubungi kami via Chat agar kuenya kami buat terlebih dahulu sesuai pesanan\r\n\r\nBahan : Butter, margarin, gula halus, kuning telur, tepung terigu, tepung maizena, susu bubuk, keju\r\n\r\nProduk yang dikirim sesuai foto,dan variasi.\r\n\r\nDikirim dengan toples ukuran 500ml dan 1000 ml \r\npackingan buble warp jadi aman selama diperjalanan\r\n\r\nBerat tergantung jenis kue antara 380 gram- 600 gram\r\n\r\nHappy shopping dan ditunggu repeat ordernya \r\n',
    'Varian Kue Kering:\r\nNastar Keju Spesial\r\nNastar Spesial\r\nNastar Lonjong\r\nKastangel Spesial\r\nPuteri Salju\r\nKue Coklat Mede\r\nKue coklat chip\r\nKue Kacang\r\nCornflakes\r\nKue Semprit nanas\r\nLidah Kucing\r\nSagu Keju Spesial\r\nSagu Keju Ring\r\nKue Ketapang\r\nKue Daun Gurih\r\nAstor mini strawberi\r\nAstor Mini Coklat\r\nKue Sagu\r\nKue Rasa Kacang Ijo\r\nNastar Love\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Nastar Keju Spesial\r\nNastar Spesial\r\nNastar Lonjong\r\nKastangel Spesial\r\nPuteri Salju\r\nKue Coklat Mede\r\nKue coklat chip\r\nKue Kacang\r\nCornflakes\r\nKue Semprit nanas\r\nLidah Kucing\r\nSagu Keju Spesial\r\nSagu Keju Ring\r\nKue Ketapang\r\nKue Daun Gurih\r\nAstor mini st',
    '1000.00',
    2,
    2
  ),
  (
    3,
    'Product/Basreng-Sajodo.png',
    'SAJODO SNACK - BASRENG PEDAS DAUN JERUK VIRAL/ pedas/ gurih/ 1kg',
    '21000.00',
    '12.00',
    'Kab. Tasikmalaya',
    5,
    2100,
    'Basreng Sajodo Snack & Food merupakan Olahan Ikan Kuniran/Tenggiri dan Tepung pilihan yang diracik oleh tangan-tangan ahli, dimasak dengan suhu terbaik dan diberikan bumbu kualitas terbaik khas Sajodo Snack & Food.\r\n\r\nKomposisi : Ikan Kuniran, Tepung, Air, Garam, Cabai Kasar, Cabai Bubuk, Penyedap Rasa & Daun Jeruk\r\nTersedia Varian Rasa :\r\nOriginal Daun Jeruk & Pedas Daun Jeruk',
    'Varian Rasa:\r\nPedas 1 kg\r\nOriginal 1kg\r\nPedas 500 gram\r\nOriginal 500 gram\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Basreng Pedas\r\nBasreng Pedas Manis\r\nBasreng Pedas Daun Jeruk\r\nBasreng Ekstra Pedas\r\nBasreng Original',
    '1000.00',
    5,
    1
  ),
  (
    4,
    'Product/Cookies-Coklat.png',
    'Cookies Kue Kering Premium Coklat Reguler',
    '50000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    128,
    '❗ SANGAT RAPUH ❗\r\n\r\nVARIAN : COKLAT✨\r\n\r\nKomposisi :\r\n⇨ Tepung Sagu\r\n⇨ Keju\r\n⇨ Tepung Terigu\r\n⇨ Telur\r\n⇨ Margarin\r\n⇨ Butter\r\n\r\nNutrisi :\r\n⇨ Berat :  255 gr\r\n⇨ Kalori : 412,20 kcal\r\n⇨ Protein : 6.04%\r\n⇨ Lemak : 23,67%\r\n⇒ Karbohidrat : 74,84%',
    'Varian Rasa:\r\nCookies Coklat Keju\r\nCookies Coklat Meses\r\nCookies Coklat Premium\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Cookies Coklat Keju\r\nCookies Coklat Meses\r\nCookies Coklat Premium',
    '1000.00',
    2,
    2
  ),
  (
    5,
    'Product/Donat.png',
    'Donat Frozen 6pcs',
    '36000.00',
    '12.00',
    'Kab. Majalengka',
    3,
    96,
    'o Donat Frozen adalah donat khas yang dibuat dari bahan segar dan tanpa pengawet.\r\no 1 Pack berisi 6pcs.\r\no Sudah termasuk Gula Bubuk.',
    'Varian Rasa:\r\nDonat Coklat\r\nDonat Keju\r\nDonat Vanila\r\nDonat Kacang\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    34,
    'Donat Coklat\r\nDonat Keju\r\nDonat Vanila\r\nDonat Kacang',
    '1000.00',
    2,
    2
  ),
  (
    6,
    'Product/Gemlong-Pedas.png',
    'Gemlong Pedas 500gram / Keripik Comring Pedas',
    '18000.00',
    '12.00',
    'Kab. Majalengka',
    5,
    156,
    'Gemlong Pedas 500gram\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nGemlong Pedas\r\nGemlong Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    64,
    'Gemlong Pedas\r\nGemlong Original',
    '1000.00',
    2,
    1
  ),
  (
    7,
    'Product/GG-SUS.png',
    'Sus Kering Isi Coklat 500gr / Kue Sus / Kue Soes / Soes Coklat / Sus Coklat / Kiloan Enak Murah',
    '25000.00',
    '12.00',
    'Kab. Majalengka',
    5,
    254,
    'Kue Soes Kering isi Cokelat Lumer Kiloan Varian Berat Bersih 250gr / 500gr\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡\r\n',
    'Varian Rasa:\r\nSoes Kering isi Cokelat\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    18,
    'Soes Kering isi Cokelat',
    '1000.00',
    2,
    2
  ),
  (
    8,
    'Product/Kacang-Polong.png',
    'Kacang Polong Ijo Hijau Jaipong 250 Gram - Gumilang Snack',
    '12000.00',
    '12.00',
    'Kab. Majalengka',
    5,
    234,
    'Kacang Polong Ijo Hijau Jaipong 250 Gram - Gumilang Snack\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Kacang Polong Ijo Jaipong\r\nNetto 250 gram\r\n\r\nRasa gurih dan renyah\r\nCemilan sehat kaya protein\r\nJadikan hidangan toples di meja kamu\r\nDijamin baru dan fresh / jauh dari exp. date\r\nDikemas dengan plastik zipper (praktis dibuka tutup)\r\nExp. 9 bulan',
    125,
    'Kacang Polong Ijo Original\r\nKacang Polong Ijo Asin',
    '1000.00',
    2,
    7
  ),
  (
    9,
    'Product/Kacang-Sangrai.png',
    'Kacang Sangrai Renyah Gurih 250gr',
    '15000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    158,
    'Kacang Sangrai Renyah Gurih 250gr\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKacang Sangray Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    24,
    'Kacang Sangray Original',
    '1000.00',
    2,
    4
  ),
  (
    10,
    'Product/Keripik-Kaca.png',
    'KERIPIK KACA PEDAS 500gr / KRIPCA / KRIPIK KACA / KERIPIK BELING KRENYEZZ',
    '15000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    158,
    'KERIPIK KACA PEDAS 500gr / KRIPCA / KRIPIK KACA / KERIPIK BELING KRENYEZZ\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKeripik Kaca Original\r\nKeripik Kaca Cabe Merah\r\nKeripik Kaca Cabe Ijo\r\nKeripik Kaca Balado Jeruk\r\nKeripik Kaca Rumput Laut\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    67,
    'Keripik Kaca Original\r\nKeripik Kaca Cabe Merah\r\nKeripik Kaca Cabe Ijo\r\nKeripik Kaca Balado Jeruk\r\nKeripik Kaca Rumput Laut',
    '1000.00',
    2,
    1
  ),
  (
    11,
    'Product/Keripik-Kentang-Balado.png',
    'Keripik Kentang Balado Pedas Manis',
    '25000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    234,
    'Keripik Kentang Balado Pedas Manis\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKeripik Kentang Original\r\nKeripik Kentang Pedas\r\nKeripik Kentang Super Pedas\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    33,
    'Keripik Kentang Original\r\nKeripik Kentang Pedas\r\nKeripik Kentang Super Pedas\r\n',
    '1000.00',
    2,
    1
  ),
  (
    12,
    'Product/Kerupuk-Kulit.png',
    'KERUPUK KULIT 250 GR / MURAH ENAK HALAL ',
    '45000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    134,
    'KERUPUK KULIT 250 GR / MURAH ENAK HALAL \r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKerupuk Kulit Pedas\r\nKerupuk Kulit Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    58,
    'Kerupuk Kulit Pedas\r\nKerupuk Kulit Original',
    '1000.00',
    2,
    1
  ),
  (
    13,
    'Product/Kerupuk-Seblak.png',
    'Kerupuk Seblak Kencur Bantet Kriuk Pedas Snack Jajan Camilan Gurih Renyah Pedas 250g',
    '14000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    453,
    'Kerupuk Seblak Kencur Bantet Kriuk Pedas Snack Jajan Camilan Gurih Renyah Pedas 250g\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKerpuk Seblak Pedas\r\nKerpuk SeblakPedas Manis\r\nKerpuk SeblakPedas Daun Jeruk\r\nKerpuk SeblakEkstra Pedas\r\nKerpuk Seblak Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    128,
    'Kerpuk Seblak Pedas\r\nKerpuk SeblakPedas Manis\r\nKerpuk SeblakPedas Daun Jeruk\r\nKerpuk SeblakEkstra Pedas\r\nKerpuk Seblak Original',
    '1000.00',
    2,
    1
  ),
  (
    14,
    'Product/Kue-Kering.png',
    'Kue Kering Spesial',
    '45000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    128,
    'Kami menjual berbagai macam produk kue kering dengan harga yang kompetitif dan RASA yang sesuai dengan keinginan Anda. \r\n\r\nDengan kualitas dan mutu yang terjamin dan 100% halal.\r\n\r\nAneka kue kering produksi rumahan dibuat oleh tangan-tangan ahli pembuat kue sehingga rasa dan kwalitas dijamin enak dan lembut\r\n\r\nJika mau pesan dengan jumlah yg banyak silahkan hubungi kami via Chat agar kuenya kami buat terlebih dahulu sesuai pesanan\r\n\r\nBahan : Butter, margarin, gula halus, kuning telur, tepung terigu, tepung maizena, susu bubuk, keju\r\n\r\nProduk yang dikirim sesuai foto,dan variasi.\r\n\r\nDikirim dengan toples ukuran 500ml dan 1000 ml \r\npackingan buble warp jadi aman selama diperjalanan\r\n\r\nBerat tergantung jenis kue antara 380 gram- 600 gram\r\n\r\nHappy shopping dan ditunggu repeat ordernya \r\n',
    'Varian Kue Kering:\r\nNastar Keju Spesial\r\nNastar Spesial\r\nNastar Lonjong\r\nKastangel Spesial\r\nPuteri Salju\r\nKue Coklat Mede\r\nKue coklat chip\r\nKue Kacang\r\nCornflakes\r\nKue Semprit nanas\r\nLidah Kucing\r\nSagu Keju Spesial\r\nSagu Keju Ring\r\nKue Ketapang\r\nKue Daun Gurih\r\nAstor mini strawberi\r\nAstor Mini Coklat\r\nKue Sagu\r\nKue Rasa Kacang Ijo\r\nNastar Love\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    15,
    'Nastar Keju Spesial\r\nNastar Spesial\r\nNastar Lonjong\r\nKastangel Spesial\r\nPuteri Salju\r\nKue Coklat Mede\r\nKue coklat chip\r\nKue Kacang\r\nCornflakes\r\nKue Semprit nanas\r\nLidah Kucing\r\nSagu Keju Spesial\r\nSagu Keju Ring\r\nKue Ketapang\r\nKue Daun Gurih\r\nAstor mini st',
    '1000.00',
    2,
    2
  ),
  (
    15,
    'Product/Kuping-Gajah.png',
    'Kue Kuping Gajah Mini 250gr',
    '14500.00',
    '12.00',
    'Kab. Majalengka',
    5,
    136,
    'Kue Kuping Gajah Mini 250gr\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKuping Gajah Lebar\r\nKuping Gajah Mini\r\nKuping Gajah Warna\r\nKuping Gajah Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Kuping Gajah Lebar\r\nKuping Gajah Mini\r\nKuping Gajah Warna\r\nKuping Gajah Original',
    '1000.00',
    2,
    2
  ),
  (
    16,
    'Product/Kuping-Mini.png',
    'Kuping Mini/ gurih/ 1kg',
    '15000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    145,
    'Kuping Mini/ gurih/ 1kg\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKuping Mini Original\r\nKuping Mini Lebar\r\nKuping Mini Coklat\r\nKuping Mini Vanila\r\nKuping Mini Warna\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Kuping Mini Original\r\nKuping Mini Lebar\r\nKuping Mini Coklat\r\nKuping Mini Vanila\r\nKuping Mini Warna',
    '2500.00',
    2,
    2
  ),
  (
    17,
    'Product/Makroni-Usus.png',
    'Sajodo Snack - Usus Ayam Crispy Daun Jeruk 500 gram',
    '55000.00',
    '12.00',
    'Kab. Tasikmalaya',
    4,
    100,
    'USUS AYAM CRISPY SAJODO SNACK & FOOD\r\nUsus Ayam Crispy Sajodo Snack & Food merupakan olahan Usus ayam dan Tepung pilihan yang diracik oleh tangan-tangan ahli kami, sehingga menciptakan Usus Ayam Crispy yang Gurih, Asin, Pedas dan Nikmat dengan Tambahan Daun jeruk yang bisa menggugah selera.\r\n\r\nKomposisi : Usus Ayam, Tepung, Penyedap Rasa, Air, Minyak Goreng, Cabai Bubuk, Cabai Kering dan Daun Jeruk\r\nTersedia Varian Rasa :\r\n1. Original Daun Jeruk 2. Pedas Daun Jeruk  \r\n\r\n== KEUNGGULAN USUS AYAM CRISPY SAJODO SNACK & FOOD ==\r\n- Terbuat dari olahan Usus Ayam yang dibersihkan 5 kali dengan baik dan teliti\r\n- Menggunakan Tepung pilihan \r\n- Pedas yang bisa dinikmati dan tidak nyegrak\r\n- Tanpa Pengawet\r\n- Daun Jeruk banyak tidak pait (produksi sendiri)\r\n- Bumbu kualitas terbaik\r\n- Selalu Menggunakan Minyak Baru\r\n- Menggunakan kemasan ziplock menjaga keamaanan dan kualitas produk\r\n- Sudah lulus Uji Lab, Halal dan ada standar PIRT\r\n\r\n== SARAN PENYAJIAN ==\r\n- Bisa langsung dicemil\r\n- Campur Nasi Anget (REKOMENDASI BANGET)\r\n- Campur Mie\r\n- Campur Bakso Aci Sajodo Snack (NAGIH BANGET)\r\n- Campur Seblak Sajodo Snack (ENAK PARAH)\r\n\r\n== PENGIRIMAN == \r\n- MINGGU & HARI LIBUR NASIONAL TIDAK ADA PENGIRIMAN. \r\n- Pengiriman REGULER (JNE, J&T, SICEPAT, dll) Pengiriman H+1 dan maksimal H+2\r\n- Pengiriman HEMAT (Sicepat Halu, J&T Economy, dll) Pengiriman H+1 maksimal H+2\r\n- Pengiriman KARGO (JNE Trucking/JTR, Sicepat Gokil) Pengiriman H+3\r\n- PRE ORDER / PO Pengiriman H+7\r\n- Estimasi barang sampai (1-4 hari untuk Jabodetabek dan Pulau Jawa), (3-7 hari diluar Pulau Jawa). \r\n- Pengiriman bisa lebih cepat atau lambat tergantung jasa pengiriman, pastikan jasa pengiriman yang dipilih adalah jasa pengiriman terbaik di daerah kalian.\r\n\r\n== CLAIM DAN GARANSI == \r\nMohon untuk lampirkan bukti keadaan baik Foto atau Video Lengkap : \r\n- Saat Barang tiba \r\n- Kondisi Dus dan Segel sebelum dibuka\r\n- Video Proses Unboxing \r\n- Kondisi isi Paket Setelah Unboxing untuk Memudahkan kita dalam Proses Investigasi, karena dikhawatirkan kelalaian dari Pihak Ekspedisi yang kurang baik dalam Handle/Penanganan Paket',
    'Varian Rasa:\r\nMakaroni Usus Pedas\r\nMakaroni Usus Pedas Manis\r\nMakaroni Usus Pedas Daun Jeruk\r\nMakaroni Usus Ekstra Pedas\r\nMakaroni Usus Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    '250 gram\r\n500 gram\r\n1 kilogram',
    '1000.00',
    5,
    1
  ),
  (
    18,
    'Product/Nastar-Nanas.png',
    'Nastar isi Nanas 250G Special kue lebaran',
    '24000.00',
    '12.00',
    'Kab. Majalengka',
    5,
    239,
    'Nastar isi Nanas 250G Special kue lebaran\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nNastar Isi Selai Nanas\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    '250 gram\r\n500 gram\r\n1 kilogram',
    '1000.00',
    2,
    2
  ),
  (
    19,
    'Product/Nastar-Premium.png',
    'Kue Nastar Premium Butter/Nastar Premium Gift',
    '135000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    196,
    'Kue Nastar Premium Butter/Nastar Premium Gift\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nNastar Keju\r\nNastar Isi Kacang\r\nNastar Isi Selai\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Nastar Keju\r\nNastar Isi Kacang\r\nNastar Isi Selai',
    '1000.00',
    2,
    2
  ),
  (
    20,
    'Product/Pisang-Dolar.png',
    'PISANG DOLAR NANGKA 250 GRAM',
    '26000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    168,
    'PISANG DOLAR NANGKA 250 GRAM\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nPisang Dolar Original\r\nPisang Dolar Manis\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    'Pisang Dolar Original\r\nPisang Dolar Manis',
    '1000.00',
    2,
    1
  ),
  (
    21,
    'Product/Sale-Lidah.png',
    'Sale Pisang Lidah 250 gr',
    '8500.00',
    '12.00',
    'Kab. Majalengka',
    5,
    345,
    'Sale Pisang Lidah 250 gr\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nSale Lidah Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    35,
    '250 gram\r\n500 gram\r\n1 kilogram',
    '1000.00',
    2,
    7
  ),
  (
    22,
    'Product/Sale-Lilit.png',
    'Sale Pisang Lilit 1KG Legit Manis Gurih Murah Enak Lezate',
    '29000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    145,
    'Sale Pisang Lilit 1KG Legit Manis Gurih Murah Enak Lezate\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nSate Lilit Pisan Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    50,
    '250 gr\r\n500 gr\r\n1 kg',
    '1000.00',
    2,
    7
  ),
  (
    23,
    'Product/Singkong-Balado.png',
    'Keripik SINGKONG PEDAS kripset legend 500gr',
    '23000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    147,
    'Keripik SINGKONG PEDAS kripset legend 500gr\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKerpik Singkong Pedas\r\nKeripik Singkong Pedas Balado\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    36,
    'Kerpik Singkong Pedas\r\nKeripik Singkong Pedas Balado',
    '1000.00',
    2,
    1
  ),
  (
    24,
    'Product/Singkong-Original.png',
    'Keripik Singkong Original 500gram Keripik Singkong Asin Gurih Renyah',
    '21000.00',
    '12.00',
    'Kab. Majalengka',
    4,
    148,
    'Keripik Singkong Original 500gram Keripik Singkong Asin Gurih Renyah\r\nberat kemasan 250gram dan 500gram\r\n\r\nYuk order dan pilih aneka makanan ringan lainnya\r\n-Toko snack dan oleh-oleh Ciamis terlengkap seindonesia\r\n-harga terjangkau dan lebih hemat\r\n-Gratis ongkir (syarat ketentuan berlaku)\r\n-Layanan COD\r\n-Packing Gratis ( Minimal order 10 bungkus atau item)\r\n-Tambkan produk WAJIB KARDUS untuk menghindari paket hancur atau rusak\r\n-Menggunakan Kardus dan Bubble warap luar dalam paket\r\n-Produk yang dikirim selalu baru/fres dg masa penyimpanan Min 3 bulan\r\n\r\n●ORDER SEBELUM JAM 15:00 DIPROSES DIHARI YANG SAMA●\r\n♡produk 99% ready, tinggalkan pesan (keterangan) jika diperlukan, Mohon untuk pengertiannya bilamana ada kardus atau kemasan yang rusak itu murni bukan kesalahan atau diluar kendala kami karna dalam pengemasan insya alloh kita amanah dan tentunya berharap keberkahan untuk kita semua.\r\n\r\nTerimakasih & Salam Hangat 🧡',
    'Varian Rasa:\r\nKeripik Singkong Original\r\n\r\nKemasan yang Tersedia:\r\n250 gram\r\n500 gram\r\n1 kilogram\r\nMari berikan penilaian untuk produk kami!',
    15,
    'Keripik Singkong Original\r\nKeripik Singkong Original Extra Keju',
    '1000.00',
    2,
    1
  );

-- --------------------------------------------------------
--
-- Table structure for table `promosi`
--
CREATE TABLE
  `promosi` (
    `id_promosi` int NOT NULL,
    `diskon_persentase` decimal(5, 2) DEFAULT NULL,
    `tanggal_mulai` date DEFAULT NULL,
    `tanggal_akhir` date DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `review`
--
CREATE TABLE
  `review` (
    `id_review` int NOT NULL,
    `rating` decimal(3, 2) DEFAULT NULL,
    `komentar` text COLLATE utf8mb4_general_ci,
    `tanggal_review` datetime DEFAULT NULL,
    `id_user` int DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `stok`
--
CREATE TABLE
  `stok` (
    `id_stok` int NOT NULL,
    `kuantitas` int DEFAULT NULL,
    `terakhir_diperbarui` datetime DEFAULT NULL,
    `id_produk` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `toko`
--
CREATE TABLE
  `toko` (
    `id_toko` int NOT NULL,
    `photo_toko` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `nama_toko` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
    `alamat_toko` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
    `deskripsi_toko` text COLLATE utf8mb4_general_ci,
    `rating_toko` decimal(3, 2) DEFAULT NULL,
    `ulasan_toko` text COLLATE utf8mb4_general_ci,
    `id_user` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `toko`
--
INSERT INTO
  `toko` (
    `id_toko`,
    `photo_toko`,
    `nama_toko`,
    `alamat_toko`,
    `deskripsi_toko`,
    `rating_toko`,
    `ulasan_toko`,
    `id_user`
  )
VALUES
  (
    1,
    'Toko/Grosir-Jajanan.png',
    'Grosir Jajanan Murah',
    'Sukabumi',
    '\r\nKami menjual cemilan jajanan jadoel hingga kekinian, oleh oleh Bandung dan masih banyak lagi. \r\n\r\nHari Minggu /Tgl Merah Tutup.\r\n\r\nSemua produk sudah free packing bubble wrap dan kardus (bila diperlukan).\r\n\r\nApabila sampai ke tujuan ada kerusakan, keterlambatan, pecah, bolong,  dapat dilakukan komplain langsung ke pihak ekspedisi (JNE, dsb). \r\nDengan melakukan transaksi di toko kami berati anda setuju dengan aturan kami sekalipun anda tidak membaca aturan.\r\n\r\nSelamat ngemil :)',
    '4.00',
    '120',
    NULL
  ),
  (
    2,
    'Toko/Gumilang-Snack.png',
    'Gumilang Snack',
    'Perbatasan Ciamis - Majalengka, Jawa Barat',
    'Gumilang Snack adalah toko yang menjual berbagai macam makanan ringan dan oleh-oleh tradisional khas Jawa Barat. Kami menjual berbagai pilihan makanan ringan secara ecer dan juga grosir, kami juga mengedepankan kualitas produk kami, kualitas produk yang kami jual dijamin sebanding dengan harga.',
    '4.00',
    '180',
    NULL
  ),
  (
    3,
    'Toko/Maicih.png',
    'Maicih',
    'Jalan Primaraga 6 Jl. Cingised, Cisaranten Endah, Kec. Arcamanik, Kota Bandung, Jawa Barat 40293',
    'Berawal dari kegemaran Bob Merdeka dan Meiry Anwar yang suka makan keripik singkong pedas dari sejak remaja. Di tahun 2010, mereka membeli keripik singkong kiloan yang dibumbui sendiri dan dikemas ulang lalu dipasarkan dengan merek Maicih. Kemudian perlahan mereka mempelajari bagaimana cara memproduksi keripik sendiri, sampai Maicih memiliki beberapa varian produk selain keripik singkong, seperti basreng, batagor instan, dan keripik talas. Kini, setelah lebih dari satu dekade, semua produk Maicih sudah dipasarkan di lebih dari sepuluh negara.',
    '4.00',
    '200',
    NULL
  ),
  (
    4,
    'Toko/Cemilan-Mini.png',
    'Nenden.sulastri06',
    'jl. aja',
    'Selamat datang di toko seblak bandung Dua dara.. kami menyediakan berbagai macam cemilan khas bandung pedas gurih.. produsen tangan pertama sehingga harga nya cocok untuk di jual kembali.. kami produksi langsung , ada yang pesan langsung produksi jadi jangan khawatir  dengan kualitas cemilan kami tanpa bahan pengawet dan dgn menggunakan bumbu pilihan yg dibuat sendiri bukan bumbu instan yg ditabur\r\n terimakasih..😊',
    '4.00',
    '190',
    NULL
  ),
  (
    5,
    'Toko/Sajodo-Snack.png',
    'Sajodo Snack',
    'Jl. Leuwidahu, Indihiang, Kec. Indihiang, Kab. Tasikmalaya, Jawa Barat 46151',
    'BASRENG SAJODO SNACK & FOOD\r\nBasreng Sajodo Snack & Food merupakan Olahan Ikan Kuniran/Tenggiri dan Tepung pilihan yang diracik oleh tangan-tangan ahli, dimasak dengan suhu terbaik dan diberikan bumbu kualitas terbaik khas Sajodo Snack & Food.\r\n',
    '4.00',
    '210',
    NULL
  );

-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE
  `users` (
    `id_user` int NOT NULL,
    `username` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
    `nama_lengkap` varchar(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
      `tanggal_lahir` date DEFAULT NULL,
      `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
      `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
      `alamat` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
      `telepon` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
      `is_shop` tinyint (1) DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `users`
--
INSERT INTO
  `users` (
    `id_user`,
    `username`,
    `nama_lengkap`,
    `tanggal_lahir`,
    `password`,
    `email`,
    `alamat`,
    `telepon`,
    `is_shop`
  )
VALUES
  (
    19,
    'Test',
    'Test',
    '2024-06-18',
    '$2b$12$MSu.GeNXKeU133FW6YKnzO2sv7nJ3ewAL51dLf46hjyKALIfuJEka',
    'test@gmail.com',
    'Jl. Merpati No. 23 Cempaka Putih\r\nKota. Jakarta PusatnDKI JakartanPos. 10510',
    '0888888888',
    NULL
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `carousel`
--
ALTER TABLE `carousel` ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_produk`
--
ALTER TABLE `detail_produk` ADD PRIMARY KEY (`id_detail_produk`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori` ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja` ADD PRIMARY KEY (`id_keranjang`),
ADD KEY `id_detail_produk` (`id_detail_produk`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item` ADD PRIMARY KEY (`id_order_item`),
ADD KEY `id_order` (`id_order`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran` ADD PRIMARY KEY (`id_pembayaran`),
ADD KEY `id_order` (`id_order`);

--
-- Indexes for table `pengaturan`
--
ALTER TABLE `pengaturan` ADD PRIMARY KEY (`id_pengaturan`),
ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `penghasilan`
--
ALTER TABLE `penghasilan` ADD PRIMARY KEY (`id_penghasilan`),
ADD KEY `id_toko` (`id_toko`);

--
-- Indexes for table `penjualan`
--
ALTER TABLE `penjualan` ADD PRIMARY KEY (`id_penjualan`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan` ADD PRIMARY KEY (`id_pesanan`),
ADD KEY `id_user` (`id_user`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk` ADD PRIMARY KEY (`id_produk`),
ADD KEY `id_toko` (`id_toko`),
ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `promosi`
--
ALTER TABLE `promosi` ADD PRIMARY KEY (`id_promosi`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `review`
--
ALTER TABLE `review` ADD PRIMARY KEY (`id_review`),
ADD KEY `id_user` (`id_user`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `stok`
--
ALTER TABLE `stok` ADD PRIMARY KEY (`id_stok`),
ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `toko`
--
ALTER TABLE `toko` ADD PRIMARY KEY (`id_toko`),
ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users` ADD PRIMARY KEY (`id_user`),
ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `carousel`
--
ALTER TABLE `carousel` MODIFY `id` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 6;

--
-- AUTO_INCREMENT for table `detail_produk`
--
ALTER TABLE `detail_produk` MODIFY `id_detail_produk` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 2;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori` MODIFY `id_kategori` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 26;

--
-- AUTO_INCREMENT for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja` MODIFY `id_keranjang` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 2;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item` MODIFY `id_order_item` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran` MODIFY `id_pembayaran` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengaturan`
--
ALTER TABLE `pengaturan` MODIFY `id_pengaturan` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penghasilan`
--
ALTER TABLE `penghasilan` MODIFY `id_penghasilan` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan`
--
ALTER TABLE `penjualan` MODIFY `id_penjualan` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan` MODIFY `id_pesanan` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk` MODIFY `id_produk` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 25;

--
-- AUTO_INCREMENT for table `promosi`
--
ALTER TABLE `promosi` MODIFY `id_promosi` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review` MODIFY `id_review` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stok`
--
ALTER TABLE `stok` MODIFY `id_stok` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `toko`
--
ALTER TABLE `toko` MODIFY `id_toko` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users` MODIFY `id_user` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 22;

--
-- Constraints for dumped tables
--
--
-- Constraints for table `detail_produk`
--
ALTER TABLE `detail_produk` ADD CONSTRAINT `detail_produk_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `keranjang_belanja`
--
ALTER TABLE `keranjang_belanja` ADD CONSTRAINT `keranjang_belanja_ibfk_1` FOREIGN KEY (`id_detail_produk`) REFERENCES `detail_produk` (`id_detail_produk`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item` ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `pesanan` (`id_pesanan`),
ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran` ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `pesanan` (`id_pesanan`);

--
-- Constraints for table `pengaturan`
--
ALTER TABLE `pengaturan` ADD CONSTRAINT `pengaturan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);

--
-- Constraints for table `penghasilan`
--
ALTER TABLE `penghasilan` ADD CONSTRAINT `penghasilan_ibfk_1` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`);

--
-- Constraints for table `penjualan`
--
ALTER TABLE `penjualan` ADD CONSTRAINT `penjualan_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `pesanan`
--
ALTER TABLE `pesanan` ADD CONSTRAINT `pesanan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
ADD CONSTRAINT `pesanan_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk` ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`),
ADD CONSTRAINT `produk_ibfk_2` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`);

--
-- Constraints for table `promosi`
--
ALTER TABLE `promosi` ADD CONSTRAINT `promosi_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `review`
--
ALTER TABLE `review` ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `stok`
--
ALTER TABLE `stok` ADD CONSTRAINT `stok_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `toko`
--
ALTER TABLE `toko` ADD CONSTRAINT `toko_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;