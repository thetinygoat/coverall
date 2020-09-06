import { useState } from 'react';
import Link from 'next/link';

const StoryCard = ({
  author, title, description, url, img, time,
}) => {
  const [status, setstatus] = useState(false);
  return (
    <div className="col-start-2 col-span-10 py-4">
      <div className="grid grid-cols-12">
        <Link href={{ pathname: `/story/${title}`, query: { url } }}>
          <h2 className="font-bold text-lg col-span-7 cursor-pointer">{title}</h2>
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
      <button
        type="button"
        className="w-1/2 mt-2 bg-yellow-400 p-1 rounded-sm"
        onClick={() => setstatus(!status)}
      >
        Check Authenticity

      </button>
      {status && (
      <div className="bg-gray-400 mt-2 p-2 rounded-sm">
        Trusted
      </div>
      )}
    </div>
  );
};

export default StoryCard;
