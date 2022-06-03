function GalleryCard({id, caption, description}) {
  return (
    
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <div>
            <h1>{caption}</h1>
            <p>{description}</p>
          </div>
          <img
            alt="pic"
            class="img-fluid"
            src="https://i.imgur.com/zmzERpe.jpg%22/%3E"
          />
        </div>
   
   
  );
}

export default GalleryCard;
