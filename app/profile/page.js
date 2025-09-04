//app/profile/page.js

import { User } from 'lucide-react';

//really really simple Profile page - random boilerplate to show how URL works
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 text-center">
        <User className="w-16 h-16 mx-auto text-gray-400 mb-6" />
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-gray-600 mb-6">Random boilerplate to show how URLs work!</p>
        <p className="text-sm text-gray-500 mb-4">Current URL: /profile</p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-700">This demonstrates Next.js folder-based routing</p>
        </div>
      </div>
    </div>
  );
}