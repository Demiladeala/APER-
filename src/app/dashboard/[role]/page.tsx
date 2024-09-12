"use client"
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useRouter for navigation
import toast, { Toaster } from 'react-hot-toast';

const RoleDashboard = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const router = useRouter();

  useEffect(() => {
    if (!role) {
      // Redirect to login or handle missing role
      // router.push('/'); // Redirecting to login page, adjust path as needed
      toast.error("No Role found yet");
    }
  }, [role, router]);

  return (
    <div className="p-8">
      <Toaster/>
      <h1 className="text-3xl font-bold text-purple-600">
        {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : 'Dashboard'}
      </h1>
      <p className="mt-4">
        Welcome to your dashboard. Here you can manage your APER submissions and view relevant data.
      </p>
      {/* Add role-specific content here */}
    </div>
  );
};

export default RoleDashboard;