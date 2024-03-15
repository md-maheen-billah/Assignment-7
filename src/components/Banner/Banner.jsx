const Banner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.5)),url(././assets/images/banner.jpeg)] bg-cover py-32 px-48 rounded-3xl text-center">
      <h2 className="text-white text-[52px] font-bold p-4 leading-[76px]">
        Discover an exceptional cooking class tailored for you!
      </h2>
      <p className="text-white font-normal text-[18px] leading-[30px] p-4">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <button className="btn rounded-[50px] bg-[#0BE58A] font-bold text-[20px] border-2 border-[#0BE58A] px-6 py-3">
          Explore Now
        </button>
        <button className="rounded-[50px] bg-opacity-100 font-bold text-white text-[20px] border-2 border-red-50 px-6 py-1 hover:bg-gray-500 hover:animate-pulse">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
