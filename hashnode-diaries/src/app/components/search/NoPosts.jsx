import Link from "next/link";

const NoPosts = ({host}) => {
  return(
    <div className="flex flex-col h-screen p-8">
      <p className="text-3xl py-4">{`Hey, No Posts found for the Publication ${host}`}</p>
      <p className="text-lg pb-6">
        Please check if you have provided the correct <strong>publication name</strong>. 
        At times, a publication may not have a published post.
      </p>
      <Link className="bg-purple-500 text-white w-32 p-1 rounded" href="/">Take me home</Link>
    </div>
  )
}

export default NoPosts;