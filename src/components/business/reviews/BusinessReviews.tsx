// import { useAuth } from "../../../hooks/useAuth";
import { IBusinessReviewsProp } from "../../../types/types";
// import BusinessAddReview from "./BusinessAddReview";

const BusinessReviews: React.FC<IBusinessReviewsProp> = ({ businessId, businessReviews }) => {

  // const {user} = useAuth();

  return (
    <div className="g-1 py-2">
      {/* <div className="py-2"> */}
        {/* <button type="button" className="btn btn-info">
          <MdOutlineRateReview /> Write a review
        </button> */}
        {/* <BusinessAddReview businessId={businessId} userId={user?.userId??0}></BusinessAddReview> */}
        {/* <hr />
      </div> */}
      
      {/* {businessReviews.map((review, index)=>{
        return <h4 key={index}>{review.comment}</h4>
      })} */}
      
      <div className="container mt-4">
      <h2 className="h4 mb-3">Business Reviews</h2>
      <div className="list-group">
        {businessReviews?.map((review) => (
          <a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <span className="badge bg-primary me-2 badge-star">{review.rating} ★</span>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Reviewed by: {review.user.username}</h6>
              <p className="mb-0 opacity-75">{review.comment}</p>
            </div>
            <small className="opacity-50 text-nowrap">{new Date(review.createdAt).toLocaleString()}</small>
          </div>
        </a>

          // <div key={review.businessReviewId} className="list-group-item">
          //   <h5 className="mb-1">Review by User: {review.user.username}&nbsp;</h5><span className="badge bg-primary me-2">{review.rating} ★</span>

          //   <div className="d-flex justify-content-between align-items-center">
          //     <div>
          //       <p className="mb-1">{review.comment}</p>
          //       <p className="mb-1">Created at: {new Date(review.createdAt).toLocaleString()} </p>
          //     </div>
          //     <small className="text-muted">
          //       Created at: <br />{new Date(review.createdAt).toLocaleString()} 
          //       by <b>{review.user.username}</b>
          //     </small>
          //   </div>
          // </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default BusinessReviews;
