import React from 'react';
import { X } from "lucide-react";

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = React.useState<any>(null);

    const openCertificateModal = (certificate: any) => {
        setSelectedCertificate(certificate);
    };

    const closeCertificateModal = () => {
        setSelectedCertificate(null);
    };

    return(
        <section id="certificates" className="min-h-screen flex bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mt-14 mb-1">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">
                My <span className="text-orange-400">Certificates</span>
              </h2>
            </div>

            {/* Certificates Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: '/Image/Sertifikat/Membangun Aplikasi Gen AI dengan Microsoft Azure.PNG',
                  title: "Membangun Aplikasi Gen AI dengan Microsoft Azure"
                },
                {
                  image: '/Image/Sertifikat/Belajar Penerapan Data Science dengan Microsoft Fabric.PNG',
                  title: "Belajar Penerapan Data Science dengan Microsoft Fabric"
                },
                {
                  image: '/Image/Sertifikat/Belajar_Dasar_ManPro.PNG',
                  title: "Belajar Dasar Manajemen Proyek"
                },
                {
                  image: '/Image/Sertifikat/Memulai Pemrograman dengan Java.PNG',
                  title: "Memulai Pemrograman Dengan Java"
                },
                {
                  image: '/Image/Sertifikat/Memulai Pemrograman dengan C.PNG',
                  title: "Memulai Pemrograman dengan C"
                },
                {
                  image: '/Image/Sertifikat/Memulai Pemrograman dengan Haskell.PNG',
                  title: "Memulai Pemrograman dengan Haskell"
                },
                {
                  image: '/Image/Sertifikat/Belajar Prinsip Pemrograman SOLID.PNG',
                  title: "Belajar Prinsip Pemrograman SOLID"
                },
              ].map((certificate, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => openCertificateModal(certificate)}>
                  <div className="bg-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeCertificateModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
              
              {/* Certificate Image */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    );
}