import Sponsors from "./Sponsors";

// Employee images Here
import leaderImg_1 from "../assets/EmployeeImages/leslie-alexander1.jpg";
import leaderImg_2 from "../assets/EmployeeImages/michael-foster2.jpg";
import leaderImg_3 from "../assets/EmployeeImages/dries-vincent3.jpg";
import TeamMemberImg_1 from "../assets/EmployeeImages/chelsea-hagon4.jpg";
import TeamMemberImg_2 from "../assets/EmployeeImages/emma-dorsey5.jpg";
import TeamMemberImg_3 from "../assets/EmployeeImages/leonard-krasner6.jpg";
import TeamMemberImg_4 from "../assets/EmployeeImages/blake-reid7.jpg";
import TeamMemberImg_5 from "../assets/EmployeeImages/kathryn-murphy8.jpg";
import TeamMemberImg_6 from "../assets/EmployeeImages/whitney-francis9.jpg";
import TeamMemberImg_7 from "../assets/EmployeeImages/jeffrey-webb10.jpg";
import TeamMemberImg_8 from "../assets/EmployeeImages/benjamin-russel11.jpg";
import TeamMemberImg_9 from "../assets/EmployeeImages/angela-fisher12.jpg";

const data = {
  leadership: [
    {
      name: "Leslie Alexander",
      title: "Co-Founder / CEO",
      images: leaderImg_1,
    },
    { name: "Michael Foster", title: "Co-Founder / CTO", images: leaderImg_2 },
    {
      name: "Dries Vincent",
      title: "Partner & Business Relations",
      images: leaderImg_3,
    },
  ],

  team: [
    {
      name: "Chelsea Hagon",
      title: "Senior Developer",
      images: TeamMemberImg_1,
    },
    {
      name: "Emma Dorsey  ",
      title: "Senior Designer  ",
      images: TeamMemberImg_2,
    },
    {
      name: "Leonard Krasner ",
      title: "VP, User Experience",
      images: TeamMemberImg_3,
    },
    {
      name: "Blake Reid ",
      title: "Junior Copywriter",
      images: TeamMemberImg_4,
    },
    {
      name: "Kathryn Murphy ",
      title: "VP, Human Resources",
      images: TeamMemberImg_5,
    },
    {
      name: "Whitney Francis ",
      title: "Content Specialist",
      images: TeamMemberImg_6,
    },
    {
      name: "Jeffrey Webb",
      title: "Account Coordinator",
      images: TeamMemberImg_7,
    },
    {
      name: "Benjamin Russel",
      title: "Senior Developer",
      images: TeamMemberImg_8,
    },
    {
      name: "Angela Fisher",
      title: "Front-end Developer",
      images: TeamMemberImg_9,
    },
  ],
};

export default function Employee() {
  return (
    <>
      <div className="bg-white pt-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="space-y-24"></div>
            <div>
              <div
                className="relative before:absolute after:absolute before:bg-yellow-500 after:bg-yellow-200 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                style={{ opacity: 1, transform: "none" }}
              ></div>
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <div style={{ opacity: 1, transform: "none" }}>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Leadership
                  </h2>
                </div>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  >
                    {data.leadership.map(({ name, title, images }) => (
                      <li>
                        <div style={{ opacity: 1, transform: "none" }}>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                              alt=""
                              loading="lazy"
                              width="1800"
                              height="1800"
                              decoding="async"
                              data-nimg="1"
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                              src={images}
                              style={{ color: "transparent" }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {name}
                              </p>
                              <p className="mt-2 text-sm text-white">{title}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-10 md:mt-28 relative before:absolute after:absolute before:bg-yellow-500 after:bg-yellow-200 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
              <div className="grid grid-cols-1 gap-6 pt-5 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Team
                  </h2>
                </div>

                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  >
                    {data.team.map(({ name, title, images }) => (
                      <li>
                        <div style={{ opacity: 1, transform: "none" }}>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                              alt=""
                              loading="lazy"
                              width="1800"
                              height="1800"
                              decoding="async"
                              data-nimg="1"
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                              src={images}
                              style={{ color: "transparent" }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {name}
                              </p>
                              <p className="mt-2 text-sm text-white">{title}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 py-40">
        <Sponsors />
      </div>
    </>
  );
}
