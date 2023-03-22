import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useThemeStore } from '../store';
import Head from 'next/head';
import ScrollToTop from 'react-scroll-to-top';
import useFetch from '../hooks/useFetch';

function Surah() {
  const router = useRouter();
  const { surah } = router.query;
  const [surahNumber, setsurahNumber] = useState(surah);
  const darkMode = useThemeStore((state) => state.darkTheme);
  const { data, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/surah/${surahNumber}`
  );

  let str = 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ';

  const nextSurah = () => {
    setsurahNumber(parseInt(surahNumber) + 1);
  };
  const prevSurah = () => {
    setsurahNumber(parseInt(surahNumber) - 1);
  };

  return (
    <>
      <Head>
        <title>The Quran App</title>
        <link rel='icon' href='https://i.postimg.cc/zG0HVyzY/profile-pic.png' />
      </Head>
      <ScrollToTop viewBox='-40 0 256 256' smooth />

      <div className='sm:p-8 bg-[#f8ebd5] text-center dark:bg-slate-700 dark:text-white '>
        <div className='sm:-mt-16 mb-8'>
          <button
            onClick={prevSurah}
            disabled={surahNumber <= 1}
            class='text-gray-700 disabled:opacity-50 disabled:border-none text-center sm:mr-24 bg-[#f0dec0] mt-20 hover:border-black  font-medium rounded-sm text-sm px-5 py-1.5  dark:bg-gray-600 dark:text-white border dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-400 '
          >
            ← Prev Surah
          </button>{' '}
          <button
            onClick={nextSurah}
            disabled={surahNumber >= 114}
            class='text-gray-700 disabled:opacity-50 disabled:border-none text-center ml-24 bg-[#f0dec0] mt-20 hover:border-black  font-medium rounded-sm text-sm px-5 py-1.5  dark:bg-gray-600 dark:text-white border dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-400 '
          >
            Next Surah →
          </button>
        </div>
        <h1 className='font-bold font-uthmanic mb-2 text-xl'>
          {data?.data?.name}
        </h1>
        <img
          className=' m-auto w-48 '
          src={
            darkMode
              ? 'https://i.postimg.cc/KvMNVczn/Screenshot-2023-03-19-at-4-57-18-PM-removebg-preview.png'
              : 'https://i.postimg.cc/65yVZWRk/image-1.png'
          }
          alt='bismillah'
        />

        <div
          dir='rtl'
          lang='ar'
          className='flex justify-center  align-middle sm:w-1/2 flex-wrap m-auto mt-16'
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
                  <div class='h-2 bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-slate-500 rounded'></div>
                  </div>
                  <div class='h-2 bg-slate-500 rounded'></div>
                  <div class='space-y-3'>
                    <div class='grid grid-cols-3 gap-4'>
                      <div class='h-2 bg-slate-500 rounded col-span-2'></div>
                      <div class='h-2 bg-slate-500 rounded col-span-1'></div>
                    </div>
                    <div class='h-2 bg-slate-500 rounded'></div>
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
                  <span className='text-sm  m-4 rounded-full px-1 border-dashed border border-black dark:border-white'>
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

export default Surah;
