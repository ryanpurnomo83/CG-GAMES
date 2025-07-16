'use client';

export default function Drawer({ setPage }) {
    return (
        <div className="bg-[#FBFBFB] text-[#000000] shadow-md flex justify-center gap-10 p-1">
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setPage('home')}
            >
                Home
            </button>
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setPage('studio')}
            >
                Create
            </button>
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setPage('account')}
            >
                Profile
            </button>
        </div>
    );
}
