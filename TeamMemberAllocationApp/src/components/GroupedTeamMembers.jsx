import { useState, useContext } from 'react';
import DataContext from './contexts/DataContext';

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setTeam } = useContext(DataContext);
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    teams.push({ team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true });

    const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    teams.push({ team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true });

    const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    teams.push({ team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true });

    const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    teams.push({ team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true });

    return teams;
  }

  function handleTeamClick(event) {
    const newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container mx-auto p-4">
      {groupedEmployees.map((item) => (
        <div key={item.team} className="bg-white shadow-md rounded-lg mb-4">
          <h4
            id={item.team}
            className="cursor-pointer bg-gray-100 p-4 text-gray-700 font-semibold rounded-t-lg"
            onClick={handleTeamClick}
          >
            Team Name: {item.team}
          </h4>
          <div
            id={`collapse_${item.team}`}
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${item.collapsed ? 'max-h-0' : 'max-h-screen'}`}
          >
            <hr className="my-4 border-gray-200" />
            {item.members.map((member) => (
              <div key={member.id} className="p-4">
                <h5 className="text-lg font-semibold mb-2">
                  <span className="text-gray-900 font-bold">Full Name:</span> {member.fullName}
                </h5>
                <p className="text-gray-800">
                  <span className="font-bold">Designation:</span> {member.designation}
                </p>
              </div>
            ))}
            <hr className="my-4 border-gray-200" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
