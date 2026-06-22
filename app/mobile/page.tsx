import Image from 'next/image';

export default function MobilePage() {
    return (
      <div className="w-full min-h-screen">
        <img
          src="/landing.webp"
          alt="Mobile Layout"
          className="w-full h-auto"
        />
      </div>
    );
  }