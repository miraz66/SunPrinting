import BlogImage1 from "../assets/blog-1.jpg";
import BlogImage2 from "../assets/blog-2.jpg";
import BlogImage3 from "../assets/blog-3.jpg";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto pb-32">
      <div className="max-w-3xl">
        <div className="pb-2 text-lg font-handle text-current_color">
          News Feeds
        </div>
        <h2 className="pb-10 font-playfair text-5xl text-gray-800 font-medium tracking-tighter leading-tight">
          Blog & Insights
        </h2>
        <p className="text-xl text-gray-700 pb-20 pt-3">
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 md:gap-10">
        <div className="border rounded-3xl hover:bg-red-50 ease-in-out duration-200">
          <div className="">
            <img className="w-full" src={BlogImage1} alt="Blog image" />
          </div>
          <div className="p-5">
            <h5 className="py-5">
              <span className="font-semibold">2023</span> /{" "}
              <span className="font-medium">Case study</span>
            </h5>
            <h4 className="text-2xl text-neutral-600 font-semibold tracking-tighter pb-5">
              Emergency printing press near you?
            </h4>
            <p className="text-gray-700 leading-7">
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </p>
          </div>
        </div>

        <div className="border rounded-3xl hover:bg-red-50 ease-in-out duration-200">
          <div className="">
            <img className="w-full" src={BlogImage2} alt="Blog image" />
          </div>
          <div className="p-5">
            <h5 className="py-5">
              <span className="font-semibold">2022</span> /{" "}
              <span className="font-medium">Case study</span>
            </h5>
            <h4 className="text-2xl font-semibold tracking-tighter pb-5">
              Introduction to our way of work near you.
            </h4>
            <p className="text-gray-700 leading-7">
              Unseal is the first NFT platform where users can mint and trade
              NFTs of their own personal health records, allowing them to take
              control of their data.
            </p>
          </div>
        </div>

        <div className="border rounded-3xl hover:bg-red-50 ease-in-out duration-200">
          <div className="">
            <img className="w-full" src={BlogImage3} alt="Blog image" />
          </div>
          <div className="p-5">
            <h5 className="py-5">
              <span className="font-semibold">2022</span> /{" "}
              <span className="font-medium">Case study</span>
            </h5>
            <h4 className="text-2xl font-semibold tracking-tighter pb-5">
              Our printing services is good for you.
            </h4>
            <p className="text-gray-700 leading-7">
              Find love in the face of fear — Phobia is a dating app that
              matches users based on their mutual phobias so they can be scared
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
