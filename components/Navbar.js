'use client'
import { Cog, User } from 'lucide-react';
import Link from 'next/link';

// STEP 1: Navbar - Justify between (flex box) + Using Icons (lucide-react)
export default function Navbar() {
  return (
    <div className="bg-white border-b border-purple-500 border-b-4 px-6 py-4">
      {/* Flexbox with justify-between */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Using icons from lucide-react */}
          <Link href="/settings">
            <Cog className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
          </Link>
        </div>
        <div className="text-center">
          {/* DevGPA clickable to ref back to home page */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 border-2 border-dashed border-gray-400 px-4 py-2">
              DevGPA
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/profile">
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}