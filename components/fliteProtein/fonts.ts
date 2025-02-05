import localFont from 'next/font/local';

export const basic = localFont({
  src: [
    {
      path: './fonts/Basic.woff2', // note: this path starts with '/' which refers to the public folder at the project root
      weight: '400',
      style: 'normal',
    },
    // If you have additional weights or formats, add them here.
  ],
  // Optionally, you can set a variable if you want to use it in your CSS:
  // variable: '--font-basic',
});