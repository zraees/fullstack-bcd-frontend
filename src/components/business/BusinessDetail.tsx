import { useLocation } from "react-router-dom";
import CustomMap from "../map/CustomMap";
import CustomCarousel from "../shared/CustomCarousel";
import BusinessOverview from "./BusinessOverview";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import BusinessReviews from "./reviews/BusinessReviews";
import BusinessAddReview from "./reviews/BusinessAddReview";
import { useAuth } from "../../hooks/useAuth";
import { IBusinessReview } from "../../types/types";
import BusinessReviewsService from "../../services/business-reviews-service";

const BusinessDetail = () => {
  const location = useLocation();
  const business = location.state;
  const [key, setKey] = useState("tabOverview"); 
  const [reviews, setReviews] = useState(business?.businessReviews);

  const { user } = useAuth();
  
  const handleTabSelect = (k: any) => {
    setKey(k);
    if (k === "tabReviews") {
      loadReviews(); // Load data when the "tabReviews" tab is selected
    }
  };

  const loadReviews = async () => {
    try {
      //const response = await fetch(`/api/get-reviews?bId=${bId}`); // Replace with your API endpoint
      const response: IBusinessReview[] = await BusinessReviewsService.getReviewsByBusinessId(business?.businessId??0);
      //const data = await response.json();
      console.log('reviews', response);
      setReviews(response);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

  //console.log('business.latitude', business.latitude, business.longitude)
  return (
    <div className="container ">
      <h1 className="display-6">Business Details</h1>

      <div className="row flex-lg-row g-1 py-4">
        <div className="col-10 col-sm-8 col-lg-6">
          <CustomCarousel
            businessPhotos={business?.businessPhotos}
          ></CustomCarousel>
        </div>
        <div className="col-lg-6">
          <Tabs
            activeKey={key}
            onSelect={handleTabSelect}
            id="controlled-tab-example"
          >
            <Tab eventKey="tabOverview" title="Overview">
              <BusinessOverview business={business}></BusinessOverview>
            </Tab>
            {(user?.userId ?? 0) > 0 && (
              <Tab eventKey="tabAddReviews" title="Add Review">
                <BusinessAddReview
                  businessId={business?.businessId??0}
                  userId={user?.userId ?? 0}
                ></BusinessAddReview>
              </Tab>
            )}
            <Tab eventKey="tabReviews" title="Reviews">
              <BusinessReviews
                businessId={business?.businessId??0}
                businessReviews={reviews}
              ></BusinessReviews>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-auto map-container">
          {(business?.businessId??0)>0 && <CustomMap
            latitude={business?.latitude}
            longitude={business?.longitude}
          ></CustomMap>}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
