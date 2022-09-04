import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag) => (
          <span
            className='inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'
            key={tag}
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
