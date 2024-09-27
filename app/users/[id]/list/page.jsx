export default async function List({ params }) {
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/users/${id}/todos`);
  const data = await response.json();
  console.log(data);
  return <div className="todo">{data.todos.map((x) =>
     x.todo)}</div>;
}
