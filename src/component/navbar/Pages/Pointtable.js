import React, { useState, useEffect } from 'react'
import './pointTable.css'

const Pointtable = () => {
  const [pointsTable, setPointsTable] = useState([]);

  const getPointsTable = async () => {
      try {
          const response = await fetch("https://api.cricapi.com/v1/series_points?apikey=f4b97228-f441-43e4-88c0-80f44077cb6f&id=d5a498c8-7596-4b93-8ab0-e0efc3345312");
          const data = await response.json();
          console.log(data);

          if (data && data.data) {
            let updatedTable = data.data.map((team) => ({
              ...team,
              points: team.wins * 2 + (team.noResult || 0) // Assuming API gives noResult attribute
          }));

          updatedTable = updatedTable.sort((a, b) => b.points - a.points);
              setPointsTable(updatedTable);
          }
      } catch (error) {
          console.error("Error fetching points table:", error);
      }
  };

  useEffect(() => {
      getPointsTable();
  }, []);
  return (
    <div className="points-table-container">
            <h2>Cricket Points Table</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {pointsTable.length > 0 ? pointsTable.map((team, index) => (
                        <tr key={team.teamId} className={index < 3 ? "top-team" : index === pointsTable.length - 1 ? "bottom-team" : ""}>
                            <td>{index + 1}</td>
                            <td>{team.teamname}</td>
                            <td>{team.matches}</td>
                            <td>{team.wins}</td>
                            <td>{team.loss}</td>
                            <td>{team.points}</td>
                            
                        </tr>
                    )) : <tr><td colSpan="7">Loading...</td></tr>}
                </tbody>
            </table>
        </div>
    );
}
 

export default Pointtable
