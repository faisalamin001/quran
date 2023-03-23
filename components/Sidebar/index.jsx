'use client';
import { Transition, Switch } from '@headlessui/react';
import { useSidebarStore, useThemeStore } from '../../store/index';
import Link from 'next/link';

export const Sidebar = () => {
  const showSidebar = useSidebarStore((state) => state.showSidebar);
  const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);
  const darkTheme = useThemeStore((state) => state.darkTheme);
  const setDarkTheme = useThemeStore((state) => state.setDarkTheme);

  const themeHandler = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        setDarkTheme(true);
      } else if (localStorage.theme === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        setDarkTheme(false);
      }
    }
  };

  if (typeof document !== 'undefined' && showSidebar) {
    document.body.style.overflow = 'hidden';
  } else if (typeof document !== 'undefined' && !showSidebar) {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <Transition
        show={showSidebar}
        enter='translate duration-500'
        enterFrom='translate-x-32 opacity-0'
        enterTo='translate-x-0 opacity-100'
        leave='translate duration-500'
        leaveFrom='translate-x-0  opacity-100'
        leaveTo='translate-x-32  opacity-0'
      >
        <div
          id='sidenav-7'
          className="fixed -top-16 bg-[#f8ebd5]  right-0 bottom-0 drop-shadow-2xl z-[1035] h-screen  sm:w-60 w-full translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-gray-800 transition duration-500 ease-in-out "
          data-te-sidenav-init
          data-te-sidenav-hidden='false'
          data-te-sidenav-right='true'
        >
          <div className='flex justify-between align-middle p-4  dark:text-white'>
            <p className='font-bold mt-2 '>Settings</p>
            <p className='p-1 rounded cursor-pointer hover:bg-orange-200  dark:hover:bg-gray-700'>
              <svg
                onClick={() => setShowSidebar(false)}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </p>
          </div>

          <ul
            className='relative m-0 mt-16 dark:text-white text-center list-none p-4'
            data-te-sidenav-menu-ref
          >
            <li className='my-8 flex justify-between align-middle'>
              <p>Dark mode</p>
              <Switch
                checked={darkTheme}
                onChange={themeHandler}
                className={`${
                  darkTheme ? 'bg-blue-600' : 'bg-gray-800'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    darkTheme ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </li>
            
            <li className='my-8 flex justify-between align-middle items-center '>
              <p>Report a problem</p>
              <Link href='mailto:faysalamin001@gmail.com?subject=Problem&body=HelloFaisal!'>
                <div className='font-bold dark:hover:bg-slate-600 hover:bg-orange-200 rounded  p-1 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z'
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li className='my-8 flex justify-between align-middle  items-center '>
              <p>I have a suggestion</p>
              <Link href='mailto:faysalamin001@gmail.com?subject=Suggestion&body=HelloFaisal!'>
                <div className='font-bold dark:hover:bg-slate-600 hover:bg-orange-200 rounded  p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li className='my-8 flex justify-between align-middle  items-center  '>
              <p>Privacy Policy</p>

              <Link onClick={() => setShowSidebar(false)} href='/privacypolicy'>
                <div className='font-bold dark:hover:bg-slate-600 hover:bg-orange-200 rounded  p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li className='my-8 flex opacity-30 justify-between align-middle  items-center  '>
              <p>Donate</p>
              <div className='font-bold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                  />
                </svg>
              </div>
            </li>
          </ul>
          <div className='mt-8 text-slate-600  dark:text-slate-400  text-center font-light text-xs'>
            <p>
              Developed by{' '}
              <Link
                className='hover:text-blue-400 hover:underline'
                href='https://github.com/faisalamin001'
              >
                Faysal
              </Link>{' '}
            </p>
          </div>
        </div>
      </Transition>
    </>
  );
};
