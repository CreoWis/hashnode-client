"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBlog = () => {
  const [publication, setPublication] = useState(null);
  const router = useRouter();

  const searchPublication = (event) => {
    event.preventDefault();
    if (publication) {
      router.push(`/publication/${publication}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <div>
          <input
            type="text"
            name="publication"
            id="publication"
            placeholder="Enter a publication url"
            onChange={(e) =>
              setPublication(e.target.value?.replace(/^https:\/\//, ""))
            }
            className="w-64 md:w-96 lg:w-96 p-4 border-[1px] border-black outline-black"
          />
        </div>
        <button
          onClick={searchPublication}
          className="bg-black hover:bg-black p-2 text-white text-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBlog;
