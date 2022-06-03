import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/")
      .then((res) => setGalleryCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="container">
      <div class="row photos">
        <>
          {galleryCards &&
            galleryCards.map((card, index) => {
              return (
                <GalleryCard
                  id={card._id}
                  caption={card.caption}
                  description={card.description}
                />
              );
            })}
        </>
      </div>
    </div>
  );
}

export default Gallery;
