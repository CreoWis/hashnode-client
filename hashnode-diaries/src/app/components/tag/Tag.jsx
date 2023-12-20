export default function Tag({ tag }) {
  return (
    <div className="m-1 bg-gray-500 text-white rounded-md p-1 text-sm">
      <a href={`/tags/${tag.id}`}>{tag.name}</a>
    </div>
  );
}