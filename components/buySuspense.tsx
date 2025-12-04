import { Suspense } from 'react';
import BuyPage from './buyContent';

export default function BuySuspense() {
  return (
    <Suspense fallback={<div className='h-screen flex justify-center items-center'>Loading...</div>}>
      <BuyPage />
    </Suspense>
  );
}