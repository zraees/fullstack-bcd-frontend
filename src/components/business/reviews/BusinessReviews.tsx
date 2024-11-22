import { useAuth } from "../../../hooks/useAuth";
import { IBusinessReviewsProp } from "../../../types/types";
import BusinessAddReview from "./BusinessAddReview";

const BusinessReviews: React.FC<IBusinessReviewsProp> = ({ businessId, businessReviews }) => {

  const {user} = useAuth();

  return (
    <div className="g-1 py-2">
      <div className="py-2">
        {/* <button type="button" className="btn btn-info">
          <MdOutlineRateReview /> Write a review
        </button> */}
        <BusinessAddReview businessId={businessId} userId={user.userId}></BusinessAddReview>
        <hr />
      </div>
      
      {/* {businessReviews.map((review, index)=>{
        return <h4 key={index}>{review.comment}</h4>
      })} */}
      
      <div className="container mt-4">
      <h2 className="h4 mb-3">Business Reviews</h2>
      <div className="list-group">
        {businessReviews.map((review) => (
          <div key={review.businessReviewId} className="list-group-item">
            {/* <h5 className="mb-1">Review by User: {review.user.username}</h5> */}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-primary me-2">{review.rating} ★</span>
                <p className="mb-1">{review.comment}</p>
              </div>
              <small className="text-muted">
                Created at: {new Date(review.createdAt).toLocaleString()} by <b>{review.user.username}</b>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default BusinessReviews;
