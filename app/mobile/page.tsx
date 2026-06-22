import Image from 'next/image';

export default function MobilePage() {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img 
          src="/landing.webp" 
          alt="Mobile Layout"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }