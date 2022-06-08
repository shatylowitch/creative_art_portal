function Form() {
  return (
    <>
<div class="card">
<img src="/images/cloud-upload-icon-svg-hd-png.png" className="card-img-top" alt="..." />
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
          />
          <span className="Error"></span>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control my-2"
            type="text"
            name="text"
            required
            placeholder="Enter Your Description"
          />
          <span className="Error"></span>
        </div>      
        <div className="form-group">
          <input
            className="btn btn-primary btn-block my-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
</div>
</div>
</>
  );
}

export default Form;
