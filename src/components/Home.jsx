export default function HomeSection() {
  return (
    <section className="  w-full  h-screen  px-2 pt-20 pb-24 bg-slate-300 md:pb-0 overflow-hidden">
      <div className="w-full h-1/5"></div>
      <ul className="flex gap-2  w-full h-4/5 lg:gap-8 px-5 lg:px-10">
      
        <li className="flex-1 h-full hidden flex-col justify-end xl:flex ">
          <div className="flex flex-col gap-2  translate-y-16 md:translate-y-40 xl:translate-y-10 lg:gap-6">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md " />
          </div>
        </li>

        <li className="flex-1 h-full hidden flex-col justify-end sm:flex ">
          <div className="flex flex-col gap-2  translate-y-16 md:translate-y-40 lg:gap-6">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md " />
          </div>
        </li>

        <li className="flex-1 h-full flex flex-col justify-end ">
          <div className="flex flex-col gap-2  translate-y-24 sm:translate-y-32 md:translate-y-0">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img
              src="images/deco2.webp"
              alt="#"
              className="rounded-md md:hidden"
            />
          </div>
        </li>

        <li className="flex-1 h-full flex flex-col justify-end ">
          <div className="flex flex-col gap-2  translate-y-36 sm:translate-y-12 md:translate-y-24 ">
            <img src="images/food1.webp" alt="#" className="rounded-md" />
            <img
              src="images/food2.webp"
              alt="#"
              className="rounded-md sm:hidden"
            />
          </div>
        </li>

        <li className="flex-1 h-full flex flex-col justify-end  ">
          <div className="flex flex-col gap-2  translate-y-24  sm:translate-y-32 md:translate-y-0">
            <img src="images/style1.webp" alt="#" className="rounded-md" />
            <img
              src="images/style2.webp"
              alt="#"
              className="rounded-md md:hidden"
            />
          </div>
        </li>

        <li className="flex-1 h-full hidden flex-col justify-end sm:flex ">
          <div className="flex flex-col gap-2  translate-y-16 md:translate-y-40 lg:gap-6">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md " />
          </div>
        </li>

        <li className="flex-1 h-full hidden flex-col justify-end xl:flex ">
          <div className="flex flex-col gap-2  translate-y-16 md:translate-y-40 xl:translate-y-10 lg:gap-6">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md " />
          </div>
        </li>
      </ul>
    </section>
  );
}
