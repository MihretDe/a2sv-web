'use client'
import ClientComponent from './Des'
import { useParams } from 'next/navigation';
function Page() {
  
  return (
    <div>
      <ClientComponent />
    </div>
  );
}

export default Page;