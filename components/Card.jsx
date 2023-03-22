import Link from 'next/link';
import useFetch from '../hooks/useFetch';

function Card() {
  const { data, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/surah`
  );

  return (
    <div className='flex flex-wrap bg-[#f8ebd5] justify-center align-middle dark:bg-gray-700'>
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
            occured while fetching the data, make sure you are connected to the
            internet
          </div>
        </div>
      )}
      {loading &&
        [1, 2, 3, 4].map(() => {
          return (
            <div class='w-40 sm:w-72 pt-4 sm:m-2 bg-[#f2e3ca] border border-gray-500 shadow dark:bg-gray-800 dark:border-gray-700  rounded-md p-4 m-4 mx-auto'>
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
                </div>
              </div>
            </div>
          );
        })}
      {!error &&
        !loading &&
        data &&
        data?.data.map((item) => {
          return (
            <Link
              href={`/${item.number}`}
              key={item.number}
              className='block w-40 sm:w-72 m-2 pt-4 sm:m-2 bg-[#f2e3ca] dark:hover:border-white border border-gray-500 rounded-lg shadow hover:bg-[#e4d3b5] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <span className='sm:p-2 p-1 ml-3 text-xs rounded-full bg-black text-white sm:font-bold'>
                {item.number}
              </span>
              <h2 className='sm:my-8 text-4xl sm:text-6xl  font-bismillah font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                {item.name}
              </h2>
              <div className='sm:p-4 p-2 text-xs'>
                <div className='flex justify-between align-middle'>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {item.englishName}
                  </p>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {item.englishNameTranslation}
                  </p>
                </div>
                <div className='flex justify-between align-middle'>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    No. of Ayahs
                  </p>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {item.numberOfAyahs}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Card;
