export const Index = () => {
    return (
      <div className="container ">
        <div className="bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">About us</h1>
            <p className="col-md-8 fs-4">
              At Business Community Directory (BCD), we connect you with local
              businesses. Explore comprehensive listings, read genuine reviews,
              and find top-rated services in your area. Whether you’re seeking
              dining, shopping, or entertainment, BCD is your go-to platform for
              discovering the best local experiences.
            </p>
            {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
          </div>
        </div>
  
        <div className="row align-items-md-stretch">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/images/business-2.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };
  