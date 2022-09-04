import React, { useState, useRef } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
    setText('');
    inputRef.current.focus();
  };
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
          <input
            type='text'
            value={text}
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            placeholder='Search for an Image'
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-teal-500 border-teal-500 hover:border-teal-700 hover:bg-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
