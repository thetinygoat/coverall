import { useState } from "react";
import Link from "next/link";
import { ceil } from "lodash";
import predict from "../api/predict";
import { formatDistance } from "date-fns";

const StoryCard = ({ author, title, description, url, img, time }) => {
  const [loading, setloading] = useState(false);
  const [trust, settrust] = useState(false);
  async function handleAuthCheck() {
    setloading(true);
    const data = await predict(url);
    settrust(data.score);
    setloading(false);
  }
  function calcClassName(score) {
    if (1 - score < 0.3) {
      return "bg-red-400 mt-2 p-1 rounded-sm text-lg font-semibold text-center";
    }
    if (1 - score >= 0.3 && 1 - score <= 0.7) {
      return "bg-yellow-400 mt-2 p-1 rounded-sm text-lg font-semibold text-center";
    }
    return "bg-green-400 mt-2 p-1 rounded-sm text-lg font-semibold text-center";
  }
  return (
    // <div className="col-start-2 col-span-10 py-4">
    //   <div className="grid grid-cols-12">
    //     <Link href={{ pathname: `/story/${title}`, query: { url } }}>
    //       <a target="_blank" className="col-span-7">
    //         <h2 className="font-bold text-lg cursor-pointer">{title}</h2>
    //       </a>
    //     </Link>
    //     <div
    //       style={{
    //         backgroundImage: `url(${img})`,
    //         width: "150px",
    //         height: "150px",
    //         backgroundSize: "cover",
    //       }}
    //       className="rounded-sm col-start-9"
    //     />
    //   </div>
    //   <button
    //     type="button"
    //     className="w-1/5 mt-2 bg-blue-600 p-4 rounded-sm text-white"
    //     onClick={() => handleAuthCheck()}
    //   >
    //     Get a trust score
    //   </button>
    //   {loading ? (
    //     <div className="bg-gray-400 mt-2 p-2 rounded-sm">
    //       Calculating trust score...
    //     </div>
    //   ) : trust && trust != "" ? (
    //     <div className={calcClassName(trust)}>
    //       {100 - ceil(parseFloat(trust) * 100)}% trusted
    //     </div>
    //   ) : null}
    // </div>
    <div className="col-start-2 col-span-10 bg-white mb-4 p-4 shadow-lg rounded-md">
      <Link href={{ pathname: `/story/${title}`, query: { url } }}>
        <a target="_blank">
          <h1 className="font-bold mb-2 text-gray-800">{title}</h1>
        </a>
      </Link>
      <p className="mb-2 text-gray-600">
        {formatDistance(new Date(time), new Date(), { addSuffix: false })} ago
      </p>
      <img src={img} alt={title} className="rounded-md mb-4" />
      <div
        className={`text-sm text-center p-1 rounded-md font-semibold text-white shadow-sm cursor-pointer ${
          loading ? "bg-green-400" : "bg-green-700"
        }`}
        onClick={() => handleAuthCheck()}
      >
        {loading ? "GETTING TRUST SCORE..." : "GET TRUST SCORE"}
      </div>
      {trust && (
        <div className={calcClassName(trust)}>
          {100 - ceil(parseFloat(trust) * 100)}% trusted
        </div>
      )}
    </div>
  );
};

export default StoryCard;
