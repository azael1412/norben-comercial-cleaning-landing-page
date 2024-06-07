import bannerImg from "../assets/images/banner.png"

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center">
      <img src={bannerImg} alt="banner" className="object-cover w-full h-[400px] md:h-[750px] lg:h-[calc(100vh-151px)]"/>
      <h1 className="absolute text-6xl font-bold text-white md:text-7xl lg:text-8xl">GET CLEANED</h1>
      <p className="absolute text-2xl font-semibold text-white lg:text-3xl mt-36">with CC Commercial Cleaners</p>
      <button className="absolute block px-5 py-5 mt-[280px] font-semibold text-white rounded-full bg-brand-orange-500 text-lg">Get appointment now</button>
    </div>
  )
}
export default Banner