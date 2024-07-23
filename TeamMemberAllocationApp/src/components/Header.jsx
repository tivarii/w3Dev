import { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Header = () => {

  const { employees, selectedTeam } = useContext(DataContext);
  const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length;

  return (
    <header className="container mx-auto">
      <div className="flex flex-wrap justify-center mt-3 mb-4">
        <div className="w-8/12">
          <h1 className="text-2xl font-bold">Team Member Allocation</h1>
          <h3 className="text-lg">{selectedTeam} has {teamMemberCount} Members</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
