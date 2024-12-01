import { Table } from "react-bootstrap";
import Loading from "../../components/shared/Loading";
import BusinessService from "../../services/business-service";
import { useEffect, useState } from "react";
import { IBusiness } from "../../types/types";
import CustomToast from "../../components/shared/CustomToast";

const List = () => {
  const INITIAL: IBusiness[] = [];
  const [businesses, setBusinesses] = useState(INITIAL);
  const [showToast, setShowToast] = useState(false);

  const fetchData = async () => {
    try {
      const res: IBusiness[] = await BusinessService.getBusinesses();
      setBusinesses(Array.isArray(res) ? res : INITIAL);
    } catch (err) {
      console.log("err", err);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMaskAsFeature = (businessId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to perform this action?"
    );
    if (!confirmDelete) return;

    BusinessService.markAsFeatured(businessId)
      .then((e) => {
        setShowToast(true);
        fetchData();
      })
      .catch((err) => console.log("error", err));
  };

  const handleDelete = (businessId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to perform this action?"
    );
    if (!confirmDelete) return;

    BusinessService.deleteBusiness(businessId)
      .then((e) => {
        setShowToast(true);
        fetchData();
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="container mt-4">
      <h3>All Businesses</h3>

      {businesses?.length <= 0 && <Loading />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Business Id</th>
            <th>Business</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Website</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business, index) => (
            <tr key={index}>
              <td>{business.businessId}</td>
              <td>{business.name}</td>
              <td>{business.address}</td>
              <td>{business.phoneNumber}</td>
              <td>{business.website}</td>
              <td>{business.isFeatured ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => handleMaskAsFeature(business.businessId)}
                >
                  Toggle Featured
                </button>
                &nbsp;
                <button
                  onClick={() =>
                    handleDelete(business.businessId)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CustomToast
        show={showToast}
        title="Success"
        onClose={() => setShowToast(false)}
        message="Action has been successfully completed!"
      />
    </div>
  );
};

export default List;
