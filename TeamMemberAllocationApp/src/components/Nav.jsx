import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-gray-700 hover:text-gray-900" to='/'>Home</Link>
        </li>
        <li>
          <Link className="text-gray-700 hover:text-gray-900" to='/GroupedTeamMembers'>Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
