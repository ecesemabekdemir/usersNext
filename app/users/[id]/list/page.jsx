export default async function List({ params }) {
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/users/${id}/todos`);
  const data = await response.json();
  console.log(data);
  return (
    <>
      <ul>
        <li className="todo">{data.todos.map((x) => x.todo)}</li>
      </ul>
    </>
  );
}
