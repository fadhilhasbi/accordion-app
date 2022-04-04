import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "Apa yang akan saya dapatkan setelah mengikuti kelas ini?",
      answer:
        "Dengan mengikuti kelas ini, kamu diharapkan untuk dapat membuat Web App sederhana.",
      open: false,
    },
    {
      question: "Berapa lama pembelajaran berlangsung?",
      answer:
        "Program ini berlangsung selama 16 sesi pertemuan. Pertemuan akan diadakan dua kali seminggu selama 3 (tiga) jam pada pukul 19.00 - 22.00.",
      open: false,
    },
    {
      question: "Berapa kuota murid per kelasnya?",
      answer:
        "Setiap kelas memiliki kuota maksimum 24 murid. Jika penuh, kamu dapat mengikuti kelas yang akan dibuka selanjutnya.",
      open: false,
    },
    {
      question:
        "Apabila setelah melakukan pembayaran, namun kuota murid sudah penuh, apakah akan ada refund?",
      answer:
        "Kami akan mengembalikan uang kamu apabila semua kelas telah mencapai kuota maksimal.",
      open: false,
    },
    {
      question: "Apakah saya harus punya latar belakang IT?",
      answer:
        "Tidak, kami akan memberikan pelatihan bagi semua calon peserta dengan apapun latar belakang pendidikan yang dimiliki.",
      open: false,
    },
    {
      question: "Bagaimana mengamankan slot saya di kelas ini?",
      answer:
        "Setelah mendaftar, kamu diwajibkan melakukan pembayaran dalam kurun waktu 1 minggu untuk mengamankan spot kamu.",
      open: false,
    },
    {
      question: "Apakah Hacktiv8 memberikan sertifikat setelah lulus?",
      answer:
        "Hacktiv8 memberikan digital sertifikat bagi para murid Hacktiv8 yang berhasil menyelesaikan program pembelajaran Hacktiv8.",
      open: false,
    },
    {
      question: "Apakah saya dijamin mendapatkan pekerjaan?",
      answer:
        "Tidak ada. Jaminan kerja hanya diperuntukkan bagi murid yang mengikuti program intensif Hacktiv8.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
