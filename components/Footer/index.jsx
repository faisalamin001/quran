import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='dark:bg-slate-800 border-t border-gray-800 bg-[#f8ebd5] p-8 dark:text-gray-500 font-light text-sm text-center'>
      <p>2023. All Rights Reserved</p>
      <Link className='text-blue-400 hover:underline' href='/privacypolicy'>
        Privacy Policy
      </Link>
    </div>
  );
};
