import CarouselImg from "./CarouselImg";

export default function RecentProject() {
  return (
    <div className="bg-white pt-20 pb-32">
      <div className="max-w-7xl space-y-8 xl:mx-auto text-center">
        <h3 className="text-5xl font-handle font-bold text-current_color">
          Recent Project
        </h3>
        <p className="pb-20 text-lg tracking-wide text-secondary_color">
          Discover the latest accomplishments of Sun Printing press, where we’ve
          transformed visions into reality. From exquisite brochures to
          captivating banners, our recent projects showcase our commitment to
          excellence and innovation in the world of printing and design.
        </p>
      </div>
      <CarouselImg />
    </div>
  );
}
