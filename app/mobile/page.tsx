import Image from 'next/image';

export default function MobilePage() {
  return (
    <div className="w-full h-screen">
      <Image 
        src="/landing.webp" 
        alt="Mobile Layout"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
}