'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // install framer-motion

export default function list({ title, children }){
    const [open, setOpen] = useState(false);

    return(
    <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex justify-center items-center gap-2 w-80 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {title}
            <span className="text-xs">{open ? '▲' : '▼'}</span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
              >
                {/* <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Email</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Phone</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tanggal Lahir</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">GMS</li>
                </ul> */}
                <ul className="py-1 text-sm text-gray-700">
                    {children}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    );
}