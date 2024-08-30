import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const About = () => {
  return (
    <>
      <div className="bg-base-100 px-6 pt-32 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                  A little bit about us...
                </h1>
                <p className="mt-6 text-xl leading-8 text-info">
                  We started out creating magical memories for countless
                  families in southeast Michigan. The Bostick Family Light Show
                  quickly became a must see event of the season.
                </p>
                <p className="mt-6 text-xl leading-8 text-info">
                  Featured numerous times on news programs like Good Morning
                  America and the Tonight Show, this Sheridan St house quickly
                  became overan with traffic. After 4 years we have outgrown our
                  home show location and have elevated our show to new heights.
                </p>
                <p className="mt-6 text-xl leading-8 text-info">
                  Partnering with Mynor Mendoza from YourPixelStore.com the
                  Bostick's and Mynor contacted Eloise Aslyum to bring a brand
                  new one of a kind event to the area.
                </p>
              </div>
            </div>
          </div>
          <div className="relative -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="assets/bflightshow.jpg"
              className="w-full max-w-full h-auto rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 mx-auto block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
