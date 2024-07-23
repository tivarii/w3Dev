import { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Teams = () => {
  const { handleTeamSelectionChange, selectedTeam } = useContext(DataContext);

  return (
    <select
      className="block w-full mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
      id="teams"
      value={selectedTeam}
      onChange={handleTeamSelectionChange}
    >
      <option value="TeamA">Team A</option>
      <option value="TeamB">Team B</option>
      <option value="TeamC">Team C</option>
      <option value="TeamD">Team D</option>
    </select>
  );
}

export default Teams;
