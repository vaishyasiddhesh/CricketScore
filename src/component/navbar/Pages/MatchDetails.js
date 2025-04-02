import { useLocation, useNavigate } from "react-router-dom";
import './MatchDetails.css'
const MatchDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const match = location.state;

  if (!match) return <h2>Match details not found!</h2>;

  return (
    <div className="match-details">
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
      <h2 className="series">{match.series}</h2>
      <div className="teamDetail">
        <div className="team">
        <img src={match.t1img} alt={match.t1} className="team-logo" />
        <p>{match.t1} </p>
        <p> {match.t1s}</p>
        </div>
        <div className="detail">
            <span>V/S</span>
            <p className="status">{match.status}</p>
        </div>
        <div className="team">
        <img src={match.t2img} alt={match.t2} className="team-logo" />
        <p>{match.t2}</p>
        <p> {match.t2s}</p>
       
        
        </div>

      </div>
      
    </div>
  );
};

export default MatchDetails;

      