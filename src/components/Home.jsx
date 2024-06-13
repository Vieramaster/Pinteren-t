export default function HomeSection() {
  return (
    <section className="  w-full  h-screen   pt-20 pb-24  md:pb-0 overflow-hidden relative">
      <div className="w-full h-1/5"></div>

      <ul className="flex gap-4  w-full h-4/5 lg:gap-8 px-5 lg:px-10 ">
        {/* CUARTA */}
        <li className="flex-1 h-full hidden flex-col justify-end 2xl:flex">
          <div className="flex flex-col gap-2 xl:flex 2xl:translate-y-32 translate-y-10  ">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md" />
          </div>
        </li>

        {/* TERCERA */}
        <li className="flex-1 h-full hidden flex-col justify-end sm:flex">
          <div className="flex flex-col gap-2">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md" />
          </div>
        </li>

        {/* SEGUNDA */}
        <li className="flex-1 h-full flex flex-col justify-end mt-12">
          <div className="flex flex-col gap-4 ">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md " />
          </div>
        </li>

        {/* CENTER */}
        <li className="flex-1 h-full flex flex-col justify-end mb-[ponga]">
  <div className="flex flex-col gap-4">
    <img src="images/food1.webp" alt="#" className="rounded-md" />
    <img src="images/food2.webp" alt="#" className="rounded-md" />
  </div>
</li>


        {/* SEGUNDA */}
        <li className=" flex-1 h-full flex flex-col justify-end mt-12">
          <div className="flex flex-col gap-4 ">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md" />
          </div>
        </li>

        {/* TERCERA */}
        <li className="flex-1 h-full hidden flex-col justify-end sm:flex">
          <div className="flex flex-col gap-2">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md" />
          </div>
        </li>

        {/* CUARTA */}
        <li className="flex-1 h-full hidden flex-col justify-end 2xl:flex">
          <div className="flex flex-col gap-2 xl:flex 2xl:translate-y-32 translate-y-10  ">
            <img src="images/deco1.webp" alt="#" className="rounded-md " />
            <img src="images/deco2.webp" alt="#" className="rounded-md" />
          </div>
        </li>
      </ul>
      <span className=" bottom-20 h-32 w-full bg-gradient-to-t from-first-color to-transparent absolute md:bottom-0"></span>
    </section>
  );
}
