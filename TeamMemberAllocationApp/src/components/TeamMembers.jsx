import TeamMemberCard from './TeamMemberCard';
import { useContext } from 'react';
import DataContext from './contexts/DataContext';

const TeamMembers = () => {
  const { employees } = useContext(DataContext);

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 
                      sm:grid-cols-1 
                      md:grid-cols-2 
                      lg:grid-cols-3 gap-5">
        {employees.map((employee) => (
          <TeamMemberCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
