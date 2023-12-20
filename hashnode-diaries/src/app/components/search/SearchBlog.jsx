const SearchBlog = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          type="text"
          name="publication"
          id="publication"
          placeholder="Enter a publication URL"
          className="w-96 rounded-md p-2 mr-3"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 p-1 rounded-lg text-white text-lg"
        >
          Search
        </button>
      </div>
      <div>
        <p className="text-gray-500 text-sm px-2 py-2">
          Please do not include https://
        </p>
      </div>
    </div>
  );
};

export default SearchBlog;
