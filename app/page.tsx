import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  // TEMPORARY: Redirect to mobile page
  redirect('/mobile');
  
  /* OLD VERSION - UNCOMMENT TO RESTORE AUTH FLOW
  import { cookies } from 'next/headers';
  
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('auth')?.value;
  
  // If authenticated, redirect to homepage
  if (authCookie === 'birdies') {
    redirect('/homepage');
  }
  
  // Not authenticated - redirect to auth (middleware should handle this, but just in case)
  redirect('/auth');
  */
}
