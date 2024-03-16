const Banner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.5)),url(././assets/images/banner.jpeg)] bg-cover lg:py-32 lg:px-48 rounded-3xl text-center">
      <h2 className="text-white text-2xl lg:text-[52px] font-bold p-4 lg:leading-[76px]">
        Discover an exceptional cooking class tailored for you!
      </h2>
      <p className="text-white font-normal text-sm lg:text-[18px] lg:leading-[30px] p-4">
        Discover mouthwatering recipes for every palate, from appetizers to
        desserts, on our delectable recipe website. Explore diverse recipes for
        every taste bud, from starters to sweets, on our tantalizing recipe
        platform.
      </p>
      <div className="flex justify-center gap-6 lg:mt-6">
        <button className="btn mb-4 lg:mb-0 rounded-[50px] bg-[#0BE58A] font-bold text-base lg:text-[20px] border-2 border-[#0BE58A] px-2 lg:px-6 lg:py-3">
          Explore Now
        </button>
        <button className="mb-4 lg:mb-0 rounded-[50px] bg-opacity-100 font-bold text-white text-base lg:text-[20px] border-2 border-red-50 px-2 lg:px-6 py-1 hover:bg-gray-500 hover:animate-pulse">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
