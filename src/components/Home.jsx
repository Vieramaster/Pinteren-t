import { useEffect, useState } from "react";

export default function HomeSection() {
  const images = {
    0: [
      {
        urls: ["images/deco1.webp", "images/deco2.webp"],
      },
      {
        urls: ["images/deco3.webp", "images/deco4.webp"],
      },
      {
        urls: ["images/deco5.webp", "images/deco6.webp"],
      },
      {
        urls: ["images/deco7.webp", "images/deco8.webp"],
      },
      {
        urls: ["images/deco9.webp", "images/deco10.webp"],
      },
      {
        urls: ["images/deco11.webp", "images/deco12.webp"],
      },
      {
        urls: ["images/deco13.webp", "images/deco14.webp"],
      },
    ],
    1: [
      {
        urls: ["images/food1.webp", "images/food2.webp"],
      },
      {
        urls: ["images/food3.webp", "images/food4.webp"],
      },
      {
        urls: ["images/food5.webp", "images/food6.webp"],
      },
      {
        urls: ["images/food7.webp", "images/food8.webp"],
      },
      {
        urls: ["images/food9.webp", "images/food10.webp"],
      },
      {
        urls: ["images/food11.webp", "images/food12.webp"],
      },
      {
        urls: ["images/food13.webp", "images/food14.webp"],
      },
    ],
    2: [
      {
        urls: ["images/children1.webp", "images/children2.webp"],
      },
      {
        urls: ["images/children3.webp", "images/children4.webp"],
      },
      {
        urls: ["images/children5.webp", "images/children6.webp"],
      },
      {
        urls: ["images/children7.webp", "images/children8.webp"],
      },
      {
        urls: ["images/children9.webp", "images/children10.webp"],
      },
      {
        urls: ["images/children11.webp", "images/children12.webp"],
      },
      {
        urls: ["images/children13.webp", "images/children14.webp"],
      },
    ],
    3: [
      {
        urls: ["images/style1.webp", "images/style2.webp"],
      },
      {
        urls: ["images/style3.webp", "images/style4.webp"],
      },
      {
        urls: ["images/style5.webp", "images/style6.webp"],
      },
      {
        urls: ["images/style7.webp", "images/style8.webp"],
      },
      {
        urls: ["images/style9.webp", "images/style10.webp"],
      },
      {
        urls: ["images/style11.webp", "images/style12.webp"],
      },
      {
        urls: ["images/style13.webp", "images/style14.webp"],
      },
    ],
  };

  const classLi = [
    "flex-1 gap-4 h-full hidden flex-col justify-end 2xl:flex ",
    "flex-1 gap-4 h-full hidden flex-col justify-end md:flex  2xl:mt-36 ",
    "flex-1 gap-4 h-full flex flex-col justify-end mt-10  2xl:mt-16",
    "flex-1 gap-4 h-full flex flex-col justify-end mt-20  2xl:mt-36",
    "flex-1 gap-4 h-full flex flex-col justify-end mt-10  2xl:mt-16",
    "flex-1 gap-4 h-full hidden flex-col justify-end md:flex  2xl:mt-36",
    "flex-1 gap-4 h-full hidden flex-col justify-end 2xl:flex ",
  ];

  const mainTitle = [
    {
      title: "Decoration proyect",
      color: "text-green-800",
    },
    {
      title: "Special food",
      color: "text-red-800",
    },
    {
      title: "Activity for childrens",
      color: "text-blue-800",
    },
    {
      title: "idea for your outfit",
      color: "text-amber-800",
    },
  ];

  const [category, setCategory] = useState(0);
  const [animation, setAnimation] = useState(true);

  const totalVisibleTime = 10000;
  const animationDelay = 1500;

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), totalVisibleTime - animationDelay);

    const interval = setInterval(() => {
      setAnimation(true);

      setCategory(
        (prevCategory) => (prevCategory + 1) % Object.keys(images).length
      );

      setTimeout(() => setAnimation(false), totalVisibleTime - animationDelay);
    }, totalVisibleTime);

    return () => clearInterval(interval);
  }, [category]);

  console.log(animation);
  return (
    <section className="w-full h-screen pt-20 pb-24 md:pb-0 relative overflow-hidden">
      <div className="w-full h-1/5 pt-10">
        <h2 className="text-center font-semibold text-3xl pt-10 lg:text-5xl">
          Discover your next
        </h2>
        {
          <h2
            className={`${mainTitle[category].color} ${
              animation ? "fadeIn" : "fadeOut"
            } text-center font-semibold text-3xl lg:text-5xl mt-2 `}
          >
            {mainTitle[category].title}
          </h2>
        }
      </div>
      <ul className="grid grid-cols-3 md:grid-cols-5 2xl:grid-cols-7 h-4/5">
        {images[category].map((item, index) => (
          <li
            key={index}
            className={`p-4 ${classLi[index]} ${
              animation ? "fadeIn" : "fadeOut"
            }`}
            style={{ animationDelay: `0.${index}s` }}
          >
            <img src={item.urls[0]} alt="card" className="rounded-2xl" />
            <img src={item.urls[1]} alt="card" className="rounded-2xl" />
          </li>
        ))}
      </ul>
      <span className="bottom-20 h-20 w-full bg-gradient-to-t from-first-color to-transparent absolute md:bottom-0 lg:h-32"></span>
    </section>
  );
}
