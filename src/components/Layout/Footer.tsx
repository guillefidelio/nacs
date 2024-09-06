import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-[#0e0b7c] text-white py-12 px-4 md:px-8 lg:px-16 rounded-tr-[70px] rounded-tl-[70px] shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.3)] w-4/5 mx-auto text-xl mt-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/topleft.png"
          alt="Decoración Superior Izquierda"
          width={400}
          height={400}
          className="absolute left-0 top-0 opacity-70 md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
        />
        <Image
          src="/bottomright.png"
          alt="Decoración Inferior Derecha"
          width={400}
          height={400}
          className="absolute right-0 bottom-0 opacity-100 md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
        />
      </div>
      <div className="container mx-auto w-4/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-medium bg-[#00f6ff] text-black px-2 py-1 rounded inline-block">Contáctanos:</h3>
            <p>Correo: info@nacsshow.com</p>
            <p>Teléfono: 555-567-8901</p>
            <p>Dirección: 1234 Main St<br />Las Vegas, Nevada 12345</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:underline text-2xl">Sobre nosotros</Link>
            <Link href="/services" className="hover:underline text-2xl">Servicios</Link>
            <Link href="/use-cases" className="hover:underline text-2xl">Casos de uso</Link>
            <Link href="/pricing" className="hover:underline text-2xl">Precios</Link>
            <Link href="/blog" className="hover:underline text-2xl">Blog</Link>
          </div>
          <div className="bg-[#292a32] p-6 rounded-lg flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="px-4 py-2 rounded border border-white bg-transparent text-2xl"
            />
            <button className="px-4 py-2 bg-[#00f6ff] text-black rounded hover:bg-[#00d8e0] transition-colors duration-300 text-2xl">
              Suscribirse a noticias
            </button>
          </div>
        </div>
        <div className="border-t border-white pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 Tie Meetings. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:underline text-2xl">Política de Privacidad</Link>
            <Link href="/terms" className="hover:underline text-2xl">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}