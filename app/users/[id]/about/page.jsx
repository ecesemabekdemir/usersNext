export default async function About({ params }) {
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();

  return (
    <>
      <div className="aboutUsers">
        <div className="information">
          <div className="aboutUser">
            <img src={data.image} alt="" />
            <div>
              <p className="name"> {`${data.firstName} ${data.lastName}`}</p>
              <p className="age">{data.age}</p>
              <p className="gender">{data.gender}</p>
              <p className="phone">{data.phone}</p>
            </div>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>{data.address.address}</p>
            <p>{data.address.city}</p>
            <p>{data.address.state}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
          <div className="company">
            <h3>Company</h3>
            <p>{data.company.deparment}</p>
            <p>{data.company.name}</p>
            <p>{data.company.address.address}</p>
            <p>{data.company.address.city}</p>
            <p>{data.company.address.state}</p>
          </div>
          <div className="university">
            <p>{data.university}</p>
          </div>
        </div>
      </div>
    </>
  );
}
