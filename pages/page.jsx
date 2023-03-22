import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import ScrollToTop from 'react-scroll-to-top';
import useFetch from '../hooks/useFetch';

function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const ref = useRef(null);
  const { data, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/page/${parseInt(pageNumber)}/ar`
  );

  useEffect(() => {
    ref.current.focus();
    if (typeof window !== 'undefined') {
      if (!localStorage.pageNumber) {
        localStorage.setItem('pageNumber', '1');
      } else {
        setPageNumber(parseInt(localStorage.pageNumber));
      }
    }
  }, []);

  const nextPage = () => {
    if (typeof window !== 'undefined') {
      setPageNumber(parseInt(pageNumber) + 1);
      localStorage.setItem('pageNumber', parseInt(pageNumber) + 1);
    }
  };
  const prevPage = () => {
    if (typeof window !== 'undefined') {
      setPageNumber(parseInt(pageNumber) - 1);
      localStorage.setItem('pageNumber', parseInt(pageNumber) - 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      nextPage();
    } else if (event.key === 'ArrowLeft') {
      prevPage();
    }
  };

  return (
    <>
      <Head>
        <title>The Quran App</title>
        <link rel='icon' href='https://i.postimg.cc/zG0HVyzY/profile-pic.png' />
      </Head>
      <ScrollToTop smooth viewBox='-40 0 256 256' />

      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className='p-8 text-center scroll-smooth	 bg-[#f8ebd5] dark:bg-slate-700 border-none outline-none dark:text-white '
      >
        <div className='-mt-10 mb-10'>
          <button
            onClick={prevPage}
            disabled={pageNumber <= 1}
            class='text-gray-700 disabled:opacity-50 disabled:border-none text-center mr-8 sm:mr-24 bg-[#f0dec0] mt-20 hover:border-black  font-medium rounded-sm text-sm px-5 py-1.5  dark:bg-gray-600 dark:text-white border dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-400 '
          >
            ← Prev Page
          </button>{' '}
          <button
            onClick={nextPage}
            disabled={pageNumber >= 604}
            class='text-gray-700 disabled:opacity-50 disabled:border-none text-center ml-8 sm:ml-24 bg-[#f0dec0] mt-20 hover:border-black  font-medium rounded-sm text-sm px-5 py-1.5  dark:bg-gray-600 dark:text-white border dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-400 '
          >
            Next Page →
          </button>
        </div>
        <div className='flex justify-between  sm:w-1/2 m-auto items-center'>
          <p className='font-uthmanic '>{pageNumber} : صفحة</p>
          <h1 className='font-bold font-uthmanic '>
            {data?.data?.ayahs[0].surah.name}
          </h1>
        </div>
        <div
          dir='rtl'
          lang='ar'
          className='flex justify-center  align-middle items-center sm:w-1/2 flex-wrap m-auto mt-16'
        >
          {error && (
            <div
              dir='ltr'
              class='flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
              role='alert'
            >
              <svg
                aria-hidden='true'
                class='flex-shrink-0 inline w-5 h-5 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>{' '}
              <br />
              <span class='sr-only'>Info</span>
              <br />{' '}
              <div>
                <br />
                <span class='font-medium'>Network error!</span> <br /> An error
                occured while fetching the data, make sure you are connected to
                the internet
              </div>
            </div>
          )}
          {loading && (
            <div class='  rounded-md p-4  w-full mx-auto'>
              <div class='animate-pulse flex  space-x-4'>
                <div class='flex-1 space-y-6 py-1'>
                  <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-black dark:bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-black dark:bg-slate-500 rounded'></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!loading &&
            !error &&
            data?.data?.ayahs?.map((item) => {
              return (
                <p className='  text-4xl font-bismillah leading-normal  '>
                  {item.text.replace(
                    'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ',
                    ''
                  )}
                  <span className='text-sm  m-4 rounded-full px-1 border-dashed border border-black dark:border-white '>
                    {item.numberInSurah}
                  </span>{' '}
                </p>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Page;
