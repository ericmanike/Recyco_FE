import { Suspense } from 'react';
import Navbar from './Navbar';
import { Spinner } from './ui/spinner';

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="flex justify-center p-4"> <Spinner /></div>}>
      <Navbar />
    </Suspense>
  );
}