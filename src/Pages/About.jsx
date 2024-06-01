import React from "react";
import Nav from "../Components/UserNavbar";
import UserFooter from "../Components/UserFooter";

const About = () => {
  return (
    <>
      <Nav />
      <main className="p-20">
        <section className="mb-6">
          <h2 className="text-xl font-bold py-10">Tentang</h2>
          <p className="mb-4">
            Snackin adalah sebuah website e-commerce yang berfokus pada
            penjualan produk makanan ringan milik UMKM. Berawal dari kepedulian
            kami terhadap perkembangan Usaha Mikro, Kecil, dan Menengah (UMKM)
            di Indonesia yang semakin banyak, namun pemilik UMKM seringkali
            kesulitan dalam memasarkan produknya secara offline maupun online
            karena persaingan pasar yang ketat. Para pemilik UMKM seringkali
            menghadapi kompetitor yang lebih besar di platform e-commerce besar.{" "}
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            UMKM memiliki peran dalam memajukan perekonomian Indonesia
          </h2>
          <div className="columns-2 py-4">
            <img
              src="./About/about1.png"
              alt="UMKM"
              className="object-fill h-50 w-98 mb-4"
            />
            <img
              src="./About/about2.png"
              alt="UMKM"
              className="object-fill h-60"
            />
          </div>
          <p className="mb-4">
            Peran UMKM sangat besar untuk pertumbuhan perekonomian Indonesia,
            dengan jumlahnya mencapai 99% dari keseluruhan unit usaha. Pada
            tahun 2023 pelaku usaha UMKM mencapai sekitar 66 juta. Kontribusi
            UMKM mencapai 61% dari Pendapatan Domestik Bruto (PDB) Indonesia,
            setara Rp9.580 triliun. UMKM menyerap sekitar 117 juta pekerja (97%)
            dari total tenaga kerja.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Filosofi Logo</h2>
          <div className="columns-2 flex items-center">
            <img
              src="./About/logo-about.png"
              alt="Snackin Logo"
              className="w-32 h-32"
            />
            <p className="ml-4">
              Logo Snackin adalah simbol kelezatan yang simpel dan modern.
              Dengan warna-warna ceria dan desain yang bersahabat, kami mengajak
              Anda untuk merasakan kegembiraan dalam setiap gigitan. Kemudahan
              dan mobilitas menjadi inti dari logo kami, mengingatkan Anda bahwa
              kelezatan sejati dapat dinikmati di mana saja dan kapan saja.
              Selamat menikmati momen-momen kecil yang penuh keceriaan dengan
              Snackin
            </p>
          </div>
        </section>
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <center>
              <h2 className="text-xl font-bold mb-4">Visi</h2>
            </center>
            <p>
              Menjadi platform e-commerce yang memungkinkan UMKM untuk
              berkembang dan bersaing secara global dengan memberikan akses
              mudah kepada pelanggan untuk menemukan produk berkualitas dari
              UMKM lokal.
            </p>
          </div>
          <div>
            <center>
              <h2 className="text-xl font-bold mb-4">Misi</h2>
            </center>
            <p>
              Dengan adanya platform ini, kami dapat Mendukung UMKM makanan
              ringan untuk berkembang dan bersaing secara online dengan
              menyediakan platform yang memungkinkan mereka memasarkan produk
              mereka secara efektif.
            </p>
          </div>
        </section>
      </main>
      <UserFooter />
    </>
  );
};

export default About;
