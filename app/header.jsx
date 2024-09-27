import Nav from "./nav";
import Users from "@/assets/images/bell.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>MEDIUM</h1>
        <Nav />
        <div className="profil">
          <img src={Users.src} alt="" />
          <div className="userProfilimg"></div>
        </div>
      </div>
    </>
  );
}
