export default function Tag({ tag, host }) {
  return (
    <div className="m-1 bg-gray-500 text-white rounded-md p-1 text-sm">
      <a href={`/publication/${host}/tags/${tag.id}`}>{tag.name}</a>
    </div>
  );
}
