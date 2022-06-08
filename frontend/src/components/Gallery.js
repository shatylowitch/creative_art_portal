import { useSearchParams } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CTA from "./CTA";

function Gallery() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category"));

  console.log(category);
  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    console.log("category changed");
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/posts${
          category ? "?category=" + category : ""
        }`
      )
      .then((res) => setGalleryCards(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  console.log("gallery cards", galleryCards);
  return (
    <div class="container Gallery-Section">
      <div className="d-flex mx-auto gap-4 justify-content-center my-5 border-info">
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
      {/* row photos text-center */}
      <div className="border-container">
        <>
          {galleryCards &&
            galleryCards.map((card, index) => {
              return (
                <GalleryCard
                  id={card._id}
                  caption={card.caption}
                  description={card.description}
                  img={card.img}
                  user={card.user}
                  category={card.category}
                />
              );
            })}
        </>
      </div>
      <CTA />
    </div>
  );
}

export default Gallery;
