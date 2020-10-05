import { useState } from 'react';
import Link from 'next/link';
import { ceil } from 'lodash';
import predict from '../api/predict';

const StoryCard = ({
  author, title, description, url, img, time,
}) => {
  const [loading, setloading] = useState(false);
  const [trust, settrust] = useState('');
  async function handleAuthCheck() {
    setloading(true);
    const data = await predict(url);
    settrust(data.score);
    setloading(false);
  }
  function calcClassName(score) {
    if (1 - score < 0.3) {
      return 'bg-red-400 mt-2 p-2 rounded-sm text-2xl font-bold';
    } if (1 - score >= 0.3 && 1 - score <= 0.7) {
      return 'bg-yellow-400 mt-2 p-2 rounded-sm text-2xl font-bold';
    }
    return 'bg-green-400 mt-2 p-2 rounded-sm text-2xl font-bold';
  }
  return (
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
      <button
        type="button"
        className="w-1/2 mt-2 bg-black p-1 rounded-sm text-white"
        onClick={() => handleAuthCheck()}
      >
        Check Authenticity

      </button>
      {loading ? (
        <div className="bg-gray-400 mt-2 p-2 rounded-sm">
          Calculating trust score...
        </div>
      ) : trust && trust != '' ? (
        <div className={calcClassName(trust)}>
          {100 - ceil(parseFloat(trust) * 100)}
          % trusted
        </div>
      ) : null}
    </div>
  );
};

export default StoryCard;
