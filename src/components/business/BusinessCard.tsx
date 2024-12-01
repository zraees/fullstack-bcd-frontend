import { useState } from "react";
import { getUserLocationAndCalculateDistance } from "../../services/location-service";
import { IBusinessCardProps } from "../../types/types";
import { SlLocationPin } from "react-icons/sl";

const baseImgUrl = import.meta.env.VITE_BCD_BASEIMAGE_URL;

const BusinessCard: React.FC<IBusinessCardProps> = ({
  business,
  redirectToDetail,
}) => {
  const imgUrl = business?.businessPhotos[0]?.url ?? `${baseImgUrl}default-3.avif`;
  const [distInKm, setDistInKm] = useState("");

  getUserLocationAndCalculateDistance(
    business?.latitude,
    business?.longitude
  ).then((x) => setDistInKm(x));

  return (
    <div
      className="card shadow-sm business-card"
      onClick={() => redirectToDetail(business)}
    >
      <img
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        role="img"
        aria-label="Placeholder: Thumbnail"
        src={imgUrl}
      />
      <div className="card-body">
        <p className="card-text">
          <b>{business.name}</b>
          <br />
          {business.description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <SlLocationPin /> {business.address}
              {/* {business?.category?.name??"category"} */}
            </button>
            {/* <button type="button" className="btn btn-sm btn-outline-secondary">
            </button> */}
          </div>
          <small className="text-body-secondary">{distInKm}</small>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
