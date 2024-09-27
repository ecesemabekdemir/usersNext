import Link from "next/link";

export default async function Users() {
  const { users } = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  console.log(users);

  return (
    <>
      <div className="usersList">
        <ul className="usersCard">
          {users.map((x) => (
            <li className="user" key={x.id}>
              <img src={x.image}></img>
              <p> {x.firstName}</p>
              <p>{x.lastName}</p>
              <Link className="detail" href={`/users/${x.id}`}>
                profile git
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
