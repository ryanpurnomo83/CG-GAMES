import Image from 'next/image';

export default function carousel(){
    return(
        <div className="bg-[#FCFCFC] rounded-md p-2 shadow-md p-2 border border-[#CBE72A] max-w-sm mx-auto">    
             <Image
                src="/connect-group.png"
                alt="connect-group Logo"
                width={55}
                height={55}
             />
        </div>
    );
}