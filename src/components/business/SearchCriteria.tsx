import { Form } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";
import CategoryDropdown from "../category/CategoryDropdown";
import CityDropdown from "../city/CityDropdown";

const SearchCriteria = ({onSearch}) => {

  const [searchData, setSearchData] = useState({
    categoryId: 0,
    cityId: 4,
    searchText: "",
  });

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-1">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light title">Find a Business</h1>

          <div className="py-lg-2 mb-3 description">
            Explore top restaurants, bars, shops, and attractions in cities
            worldwide. Uncover local favorites and must-visit spots for your
            next adventure!
          </div>

          <Form className="needs-validation">
            <div className="row g-2">
              <div className="col-md-auto">
                <input
                  type="text"
                  className="form-control"
                  id="business"
                  placeholder="I'm looking for ..."
                  value={searchData.searchText}
                  onChange={(e) => setSearchData({ ...searchData, searchText: e.target.value })}
                />
              </div>

              <div className="col-md-auto">
                <CategoryDropdown
                  value={searchData.categoryId}
                  onChange={(categoryId) =>
                    setSearchData({ ...searchData, categoryId })
                  }
                />
              </div>

              <div className="col-md-auto">
                <CityDropdown
                  value={searchData.cityId}
                  onChange={(cityId) =>
                    setSearchData({ ...searchData, cityId })
                  }
                />
              </div>

              <div className="col-md-auto">
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={() => {
                    onSearch(searchData.searchText, searchData.cityId, searchData.categoryId);
                  }}
                >
                  <FaSearchLocation /> Search
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SearchCriteria;
