import ContactFrom from "../components/ContactFrom";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-100">
        <ContactFrom />
      </div>
    </>
  );
}
