import { useLocation, useParams } from 'react-router-dom';
import "./WhereToSelected.css";
import useFetch from '../../components/hooks/useFetch';
import AllCity from "../../components/CityList/AllCity"
import { useNavigate } from 'react-router-dom';
export default function PlanTripSelected() {
  const navigate = useNavigate()
    const { placeName } = useParams();  // Access the placeName URL parameter
    //   console.log(placeName);
    const location = useLocation();
    const { someProp } = location.state || {};  // Access the passed state
    const { data: cities, loading, error } = useFetch(`http://localhost:7000/api/trendingplace`);
    return (
        <div className='where-to-container'>
            <div className="place-card-content">
                <div className="where-to-header">
                    <img src={someProp.img} alt="" />
                    <h1 className="where-to-title">{someProp.name}</h1>
                    <p className="where-to-description">{someProp.description}</p>
                </div>
            </div>
            <div className="where-to-content">
                <AllCity cities={cities || []} trending="trendingcity" navigate={navigate} />
            </div>
        </div>
    );
};
