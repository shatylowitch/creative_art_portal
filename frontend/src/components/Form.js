import { useState } from "react";
import axios from "axios";

function Form() {
  const [previewSource, setPreviewSource] = useState("");
  const [captionState, setCaptionState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [category, setCategory] = useState("");

  const previewFile = (file) => {
    const reader = new FileReader();
    //this will convert image to string
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    // setOpen(!open);
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          base64: base64EncodedImage,
          caption: captionState,
          description: descriptionState,
          category,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(data);

      setCaptionState("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="card">
        <img
          src="/images/cloud-upload-icon-svg-hd-png.png"
          className="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <form action="" method="post">
            <div className="preview text-center">
              <div className="browse-button my-2 text-center">
                <i className="fa fa-pencil-alt"></i>
                <input
                  className="browse-input"
                  type="file"
                  required
                  name="UploadedFile"
                  id="UploadedFile"
                  onChange={(e) => previewFile(e.target.files[0])}
                />
              </div>
              <span className="Error"></span>
            </div>
            <div className="form-group">
              <label>Caption:</label>
              <input
                className="form-control my-2"
                type="text"
                name="Enter Your Caption"
                required
                placeholder="Enter Your Caption"
                onChange={(e) => setCaptionState(e.target.value)}
              />
              <span className="Error"></span>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                onChange={(e) => setDescriptionState(e.target.value)}
                className="form-control my-2"
                type="text"
                name="text"
                required
                placeholder="Enter Your Description"
              />
              <span className="Error"></span>
            </div>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="photoshop">Photoshop</option>
              <option value="illustrator">Illustrator</option>
              <option value="photography">Photography</option>
              <option value="painting">Painting</option>
            </select>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block my-2"
                onClick={handleSubmitFile}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
