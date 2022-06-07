import { useSearchParams } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");
  console.log(category);
  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/posts${category ? "?category=" + category : ""}`
      )
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
