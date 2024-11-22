import { IBusinessReviewsProp } from "../../../types/types";
import BusinessAddReview from "./BusinessAddReview";

const BusinessReviews: React.FC<IBusinessReviewsProp> = ({ businessId, businessReviews }) => {

  return (
    <div className="g-1 py-2">
      <div className="py-2">
        {/* <button type="button" className="btn btn-info">
          <MdOutlineRateReview /> Write a review
        </button> */}
        <BusinessAddReview businessId={businessId} userId="4"></BusinessAddReview>
        <hr />
      </div>
      
      {businessReviews.map((review, index)=>{
        return <h4 key={index}>{review.comment}</h4>
      })}
      
    </div>
  );
};

export default BusinessReviews;
