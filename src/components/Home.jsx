import { useEffect, useState } from "react";

export default function HomeSection() {
  const images = {
    0: [
      {
        id: 1,
        urls: ["images/deco1.webp", "images/deco2.webp"],
        delay: "0.50",
      },
      {
        id: 2,
        urls: ["images/deco3.webp", "images/deco4.webp"],
        delay: "1.00",
      },
      {
        id: 3,
        urls: ["images/deco5.webp", "images/deco6.webp"],
        delay: "1.50",
      },
      {
        id: 4,
        urls: ["images/deco1.webp", "images/deco2.webp"],
        delay: "2.00",
      },
      {
        id: 5,
        urls: ["images/deco3.webp", "images/deco4.webp"],
        delay: "2.50",
      },
      {
        id: 6,
        urls: ["images/deco5.webp", "images/deco6.webp"],
        delay: "3.00",
      },
      {
        id: 7,
        urls: ["images/deco1.webp", "images/deco2.webp"],
        delay: "3.50",
      },
    ],
    1: [
      {
        id: 1,
        urls: ["images/food1.webp", "images/food2.webp"],
        delay: "0.50",
      },
      {
        id: 2,
        urls: ["images/food3.webp", "images/food4.webp"],
        delay: "1.00",
      },
      {
        id: 3,
        urls: ["images/food5.webp", "images/food6.webp"],
        delay: "1.50",
      },
      {
        id: 4,
        urls: ["images/food1.webp", "images/food2.webp"],
        delay: "2.00",
      },
      {
        id: 5,
        urls: ["images/food3.webp", "images/food4.webp"],
        delay: "2.50",
      },
      {
        id: 6,
        urls: ["images/food5.webp", "images/food6.webp"],
        delay: "3.00",
      },
      {
        id: 7,
        urls: ["images/food1.webp", "images/food2.webp"],
        delay: "3.50",
      },
    ],
    2: [
      {
        id: 1,
        urls: ["images/children1.webp", "images/children2.webp"],
        delay: "0.50",
      },
      {
        id: 2,
        urls: ["images/children3.webp", "images/children4.webp"],
        delay: "1.00",
      },
      {
        id: 3,
        urls: ["images/children5.webp", "images/children6.webp"],
        delay: "1.50",
      },
      {
        id: 4,
        urls: ["images/children1.webp", "images/children2.webp"],
        delay: "2.00",
      },
      {
        id: 5,
        urls: ["images/children3.webp", "images/children4.webp"],
        delay: "2.50",
      },
      {
        id: 6,
        urls: ["images/children5.webp", "images/children6.webp"],
        delay: "3.00",
      },
      {
        id: 7,
        urls: ["images/children1.webp", "images/children2.webp"],
        delay: "3.50",
      },
    ],
    3: [
      {
        id: 1,
        urls: ["images/style1.webp", "images/style2.webp"],
        delay: "0.50",
      },
      {
        id: 2,
        urls: ["images/style3.webp", "images/style4.webp"],
        delay: "1.00",
      },
      {
        id: 3,
        urls: ["images/style5.webp", "images/style6.webp"],
        delay: "1.50",
      },
      {
        id: 4,
        urls: ["images/style1.webp", "images/style2.webp"],
        delay: "2.00",
      },
      {
        id: 5,
        urls: ["images/style3.webp", "images/style4.webp"],
        delay: "2.50",
      },
      {
        id: 6,
        urls: ["images/style5.webp", "images/style6.webp"],
        delay: "3.00",
      },
      {
        id: 7,
        urls: ["images/style1.webp", "images/style2.webp"],
        delay: "3.50",
      },
    ],
  };

  const classLi = {
    0: "flex-1 gap-4 h-full hidden flex-col justify-end 2xl:flex",
    1: "flex-1 gap-4 h-full hidden flex-col justify-end sm:flex",
    2: "flex-1 gap-4 h-full flex flex-col justify-end mt-12",
    3: "flex-1 gap-4 h-full flex flex-col justify-end ",
    4: "flex-1 gap-4 h-full flex flex-col justify-end mt-12",
    5: "flex-1 gap-4 h-full hidden flex-col justify-end sm:flex",
    6: "flex-1 gap-4 h-full hidden flex-col justify-end 2xl:flex",
  };

  const [category, setCategory] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const maxDelay = Math.max(
      ...images[category].map((item) => parseFloat(item.delay))
    );

    const totalAnimationTime = 10000 + maxDelay * 1000;

    const interval = setInterval(() => {
      setTimeout(() => setAnimation(true), 500);
      setCategory(
        (prevCategory) => (prevCategory + 1) % Object.keys(images).length
      );

      setTimeout(() => setAnimation(false), totalAnimationTime);
    }, totalAnimationTime );

    return () => clearInterval(interval);
  }, [category]);

  console.log(animation);
  return (
    <section className="w-full h-screen pt-20 pb-24 md:pb-0 overflow-hidden relative">
      <div className="w-full h-1/5"></div>
      <ul className="grid grid-cols-3 md:grid-cols-5 2xl:grid-cols-7 h-4/5 gap-4 m-4 custom-img">
        {images[category].map((item, index) => (
          <li
            key={index}
            className={`p-4 ${classLi[index]} ${animation ? "fadeIn" : ""}`}
            style={{ animationDelay: `${item.delay}s` }}
          >
            <img src={item.urls[0]} alt="card" className="rounded-2xl" />
            <img src={item.urls[1]} alt="card" className="rounded-2xl" />
          </li>
        ))}
      </ul>
      <span className="bottom-20 h-32 w-full bg-gradient-to-t from-first-color to-transparent absolute md:bottom-0"></span>
    </section>
  );
}
