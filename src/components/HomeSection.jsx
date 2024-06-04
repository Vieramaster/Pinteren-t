import { useState, useEffect } from "react";

export default function HomeSection({ activeComponent, api }) {
  const [dataHome, setDataHome] = useState({});

  useEffect(() => {
    if (activeComponent === 3) {
      const fetchPhotos = async () => {
        let photos = [];
        for (let i = 0; i < 6; i++) {
          const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${api}`);
          const result = await response.json();
          photos.push(result);
        }
        setDataHome(photos);
      };

      fetchPhotos().catch((error) => console.error('Error:', error));
    }
  }, [activeComponent, api]);

  console.log(dataHome);
  return (
    <section className=" w-full min-h-[calc(100vh-_5rem)] h-auto px-5 lg:px-10"></section>
  );
}
