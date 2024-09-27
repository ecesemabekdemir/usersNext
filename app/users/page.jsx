import Link from "next/link";

export default async function Users() {
  const { users } = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  console.log(users);

  return (
    <>
      <div className="usersList">
        <div className="usersListCard">
          {users.map((x) => (
            <div className="users" key={x.id}>
              <img className="userImg" src={x.image}></img>
              <div className="userListDetail">
                <div>
                  <div className="userName">
                    <p> {`${x.firstName} ${x.lastName}`}</p>
                  </div>
                  <div className="userInfo">
                    <p className="age">{x.age}</p>
                    <p className="gender">{x.gender}</p>
                  </div>
                </div>
                <div className="detailLink">
                  <Link href={`/users/${x.id}`}>profile git</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
