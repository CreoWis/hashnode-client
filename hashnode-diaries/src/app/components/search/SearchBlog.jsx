"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBlog = () => {
  const [publication, setPublication] = useState(null);
  const router = useRouter();

  const searchPublication = (event) => {
    event.preventDefault();
    console.log(publication);
    if (publication) {
      router.push(`/publication/${publication}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          type="text"
          name="publication"
          id="publication"
          placeholder="Enter a publication URL"
          onChange={(e) => setPublication(e.target.value)}
          className="w-64 md:w-96 lg:w-96 rounded-md p-2 mr-3 border-[1px] border-black"
        />
        <button
          onClick={searchPublication}
          className="bg-purple-500 hover:bg-purple-700 p-1 rounded-lg text-white text-lg"
        >
          Search
        </button>
      </div>
      <div>
        <p className="text-gray-500 text-sm px-1 py-1">
          Please exclude https://
        </p>
      </div>
    </div>
  );
};

export default SearchBlog;
