import { useSearchParams } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category"));

  console.log(category);
  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    console.log("category changed");
    axios
      .get(
        `http://localhost:3000/posts${category ? "?category=" + category : ""}`
      )
      .then((res) => setGalleryCards(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div class="container">
      <div className="d-flex mx-auto gap-4 justify-content-center my-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchParams();
            setCategory("");
          }}
        >
          Browse All
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchParams({ category: "photoshop" });
            setCategory("photoshop");
          }}
        >
          Photoshop
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchParams({ category: "illustrator" });
            setCategory("illustrator");
          }}
        >
          Illustrator
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchParams({ category: "photography" });
            setCategory("photography");
          }}
        >
          Photography
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchParams({ category: "painting" });
            setCategory("painting");
          }}
        >
          Painting
        </button>
      </div>
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
