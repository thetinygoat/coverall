import { useState } from "react";
import Link from "next/link";

const SearchCard = ({ author, title, description, url, img, time }) => (
  <div className="col-start-2 col-span-10 bg-white mb-4 p-4 shadow-lg rounded-md">
    <Link href={{ pathname: `/story/${title}`, query: { url } }}>
      <a target="_blank">
        <h1 className="font-bold mb-2 text-gray-800">{title}</h1>
      </a>
    </Link>
    <img src={img} alt={title} className="rounded-md mb-4" />
  </div>
);

export default SearchCard;
