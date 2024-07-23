import PropTypes from 'prop-types';
import maleProfile from '../images/maleProfile.jpg';
import femaleProfile from '../images/femaleProfile.jpg';
import { useContext } from 'react';
import DataContext from './contexts/DataContext';

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div
      id={employee.id}
      onClick={handleEmployeeCardClick}
      style={{ cursor: "pointer" }}
      className={`m-2 p-4 bg-white rounded-lg shadow-md ${employee.teamName === selectedTeam ? 'ring-2 ring-indigo-500' : ''}`}
    >
      <img
        src={employee.gender === 'male' ? maleProfile : femaleProfile}
        className="w-full h-48 object-cover rounded-t-lg"
        alt="profile"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold">Full Name: {employee.fullName}</h5>
        <p className="mt-2"><b>Designation:</b> {employee.designation}</p>
      </div>
    </div>
  );
};

// PropTypes validation
TeamMemberCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['male', 'female']).isRequired,
    teamName: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;
