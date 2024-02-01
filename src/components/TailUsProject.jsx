import { useNavigate } from "react-router-dom";

export default function TailUsProject() {
  const navigate = useNavigate();

  return (
    <>
      <div className="-mt-64 max-xl:mx-10">
        <div className="max-w-7xl mx-auto bg-red-600 py-20 md:py-24 px-6 md:px-10 xl:px-20 2xl:px-40 rounded-[60px]">
          <h3 className="pb-8 text-3xl md:text-4xl text-neutral-100 font-semibold tracking-tighter">
            Tell us about your project !
          </h3>
          <button
            onClick={() => navigate("/contact")}
            className="px-3 md:px-5 py-1 md:py-2 text-base rounded-full bg-neutral-100 font-medium hover:bg-neutral-200 ease-in-out duration-200"
          >
            Say Hei
          </button>

          <div className="h-[1px] w-full my-12 bg-primary"></div>

          <div className="grid md:grid-cols-2 md:gap-16">
            <div className="text-gray-100">
              <h2 className="text-xl font-medium tracking-tighter">
                Our offices
              </h2>

              <h3 className="pt-6 pb-1 md:text-lg tracking-tighter">
                Copenhagen
              </h3>
              <div className="text-sm text-gray-300 leading-6">
                <p>1 Carlsberg Gate</p>
                <p>1260, København, Denmark</p>
              </div>
            </div>

            <div className="text-gray-100">
              <h3 className="pt-5 md:pt-14 md:text-lg pb-1 tracking-tighter">
                Billund
              </h3>
              <div className="text-sm text-gray-300 leading-6">
                <p>24 Lego Allé</p>
                <p>7190, Billund, Denmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
