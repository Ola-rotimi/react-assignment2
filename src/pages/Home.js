import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
    <div className="homepage">
      <h1 className="heading">Peoples Profile</h1>
      <Link to="profile">Profile</Link>
    </div>
    <Footer />
    </div>
  );
}
