import { useState } from 'react';
import Link from 'next/link';

const SearchCard = ({
  author, title, description, url, img, time,
}) => (
  <div className="col-start-2 col-span-10 py-4">
    <div className="grid grid-cols-12">
      <Link href={{ pathname: `/story/${title}`, query: { url } }}>
        <a target="_blank" className="col-span-7">
          <h2 className="font-bold text-lg cursor-pointer">{title}</h2>
        </a>
      </Link>
      <div
        style={{
          backgroundImage: `url(${img})`,
          width: '95px',
          height: '95px',
          backgroundSize: 'cover',
        }}
        className="rounded-sm col-start-9"
      />
    </div>
  </div>
);

export default SearchCard;
