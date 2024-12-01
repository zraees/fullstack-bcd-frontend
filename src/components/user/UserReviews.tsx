import { useEffect, useState } from "react";
import { IBusinessReview } from "../../types/types";
import BusinessReviewsService from "../../services/business-reviews-service";
import { useAuth } from "../../hooks/useAuth";
import { Table } from "react-bootstrap";
import Loading from "../shared/Loading";

const UserReviews = () => {
  const { user } = useAuth();
  const INITIAL: IBusinessReview[] = [];
  const [userReviewsData, setUserReviewsData] = useState(INITIAL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: IBusinessReview[] =
          await BusinessReviewsService.getReviewsByUserIdAsync(user?.userId);
        setUserReviewsData(Array.isArray(res) ? res : INITIAL);
      } catch (err) {
        console.log("err", err);
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3>My Reviews ({userReviewsData?.length})</h3>
              
      {userReviewsData?.length <= 0 && <Loading />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Business</th>
            <th>Ratimg</th>
            <th>Comments</th>
            <th>Review DateTime</th>
          </tr>
        </thead>
        <tbody>
          {userReviewsData.map((review, index) => (
            <tr key={index}>
              <td>{review.user.username}</td>
              <td>{review.business.name}</td>
              <td><span className="badge bg-primary me-2 badge-star">{review.rating} ★</span></td>
              <td>{review.comment}</td>
              <td>{review.createdAt.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserReviews;
