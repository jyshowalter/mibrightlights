const AboutHome = () => {
  return (
    <div>
      <div className="bg-base-100 px-6 pt-32 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="mt-6 text-xl leading-8 text-info">
                  Get ready for an unforgettable holiday experience at MI Bright
                  Lights, the area's one and only drive-through light show
                  featuring a synchronized pixel light display!
                </p>
                <p className="mt-6 text-xl leading-8 text-info">
                  Picture this: stunning lights dancing in perfect harmony with
                  your favorite festive tunes, all played right over your car’s
                  stereo.
                </p>
                <p className="mt-6 text-xl leading-8 text-info">
                  Each visit is a brand-new adventure with dozens of different
                  songs, making it the most immersive and memorable holiday
                  outing you’ll have this season. MI Bright Lights is more than
                  a light show—it's a magical celebration of sound, light, and
                  holiday spirit!
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
    </div>
  );
};

export default AboutHome;
