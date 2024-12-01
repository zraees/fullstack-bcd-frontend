import { IBusinessReviewsProp } from "../../../types/types";
import Loading from "../../shared/Loading";

const BusinessReviews: React.FC<IBusinessReviewsProp> = ({ businessReviews }) => {

  return (
    <div className="g-1 py-2">
      <div className="container mt-4">
        
      {businessReviews?.length <= 0 && <Loading />}

      {/* <h2 className="h4 mb-3">Business Reviews</h2> */}
      <div className="list-group">
        {businessReviews?.map((review) => (
          <a key={review.businessReviewId} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <span className="badge bg-primary me-2 badge-star">{review.rating} ★</span>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Reviewed by: {review.user.username}</h6>
              <p className="mb-0 opacity-75">{review.comment}</p>
            </div>
            <small className="opacity-50 text-nowrap">{new Date(review.createdAt).toLocaleString()}</small>
          </div>
        </a>
        ))}
      </div>
    </div>

    </div>
  );
};

export default BusinessReviews;
