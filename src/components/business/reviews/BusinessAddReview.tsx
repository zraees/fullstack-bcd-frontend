import { useState } from "react";
import StarRating from "../../shared/StarRating";
import { IBusinessAddReviewProps } from "../../../types/types";
import BusinessService from "../../../services/business-service";

const BusinessAddReview: React.FC<IBusinessAddReviewProps> = ({
  businessId,
  userId,
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate rating and comment
    if (rating <= 0 || comment.trim() === "") {
      setError("Please provide a valid rating and comment.");
      return;
    }

    try {
      const response = await BusinessService.addReview(
        businessId,
        userId,
        rating,
        comment
      );
      console.log("review submitted successful:", response);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "An error occurred");
      alert("Something went wrong !");
    } finally {
      setLoading(false);
    }

    // Reset the form
    setRating(0);
    setComment("");
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <StarRating rating={rating} onRatingChange={setRating} />
          {rating <= 0 && error && (
            <div className="text-danger">Please select a rating.</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            id="comment"
            className={`form-control ${
              comment.trim() === "" && error ? "is-invalid" : ""
            }`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          {comment.trim() === "" && error && (
            <div className="invalid-feedback">Please enter a comment.</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit Review"}
        </button>

        {error && <div className="alert alert-danger">{error}</div>}
      </form>
    </div>
  );
};

export default BusinessAddReview;
