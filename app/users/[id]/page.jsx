import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductsDetail({ params }) {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/users/${id}`); // idsine göre mesajın detayı

  if (response.status === 500) {
    throw new Error("Sunucuda bir hata oluştu"); // istediğimiz bir hata mesajını atmamızı sağlıyor.
  }

  if (!response.ok) {
    // 200 degilse not found  cağır
    return notFound();
  }

  const data = await response.json();

  console.log(response);

  return (
    <div className="userDetailContainer">
      <div className="userDetail">
        <div className="userDetailHeader">
          <div className="detailCard">
            <img src={data.image} alt="" />
            <div className="nameBox">
              <h4>
                {data.firstName} {data.lastName}
              </h4>
              <p>457 Followers</p>
            </div>
          </div>
          <div className="follow">
            <button className="followBtn">Follow</button>
            <button className="mesBtn">Message</button>
            <button className="btn">...</button>
          </div>
        </div>
        <div className="userDetailNav">
          <Link href={`/users/${id}/home`}>Home</Link>
          <Link href={`/users/${id}/list`}>List</Link>
          <Link href={`/users/${id}/about`}>About</Link>
        </div>
      </div>
    </div>
  );
}
