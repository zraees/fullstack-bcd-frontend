import { useEffect, useState } from "react";
import { ICityProp, ICity } from "../../types/types";
import LookupService from "../../services/lookup-service";

const CityDropdown: React.FC<ICityProp> = ({ value, onChange }) => {
    const INITIAL: ICity[] = [];
  const [cities, setCities] = useState(INITIAL);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res: ICity[] = await LookupService.getCities();
        setCities(Array.isArray(res) ? res : INITIAL);

      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div>
      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="cityID"
        required
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.cityId} value={city.cityId}>
            {city.cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
