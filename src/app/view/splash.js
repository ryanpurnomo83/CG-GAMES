import Image from 'next/image';

export default function Splash() {
  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col items-center justify-center">
      <div>
        {/* Konten 1 */}
      </div>
      <div className="flex flex-col items-center mt-4">
        <Image
          src="/connect-group.png"
          alt="connect-group Logo"
          width={80}
          height={80}
          />
          <h2 className="font-sans text-gray-700 mb-2">Games</h2>
      </div>
      <br/>
      <br/>
      <div className="flex flex-col items-center mt-4">
        <p className="font-sans text-gray-700 mb-2">Presented By</p>
        <Image
          //className="dark:invert"
          src="/GMS.png"  // Gambar dari folder public
          alt="GMS Logo"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}