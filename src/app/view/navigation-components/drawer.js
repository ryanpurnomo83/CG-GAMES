'use client';
import { usePage } from "../page-context";

export default function Drawer() {
    const { setCurrentPage } = usePage();
    return (
        <div className="bg-[#FBFBFB] text-[#000000] shadow-md flex justify-center gap-10 p-1">
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setCurrentPage('home')}
            >
                Home
            </button>
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setCurrentPage('studio')}
            >
                Create
            </button>
            <button
                className="w-15 h-15 border border-[#CBE72A] bg-[#FCFCFC] rounded-full flex items-center justify-center"
                onClick={() => setCurrentPage('account')}
            >
                Profile
            </button>
        </div>
    );
}
