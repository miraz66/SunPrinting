import ContactFrom from "../components/ContactFrom";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-red-500">
        <div className="bg-white bg-opacity-95">
          <ContactFrom />
        </div>
      </div>
    </>
  );
}
