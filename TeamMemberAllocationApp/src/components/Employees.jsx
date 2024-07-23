import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = () => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-6/12">
          <Teams />
          {/* this is for team */}
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-8/12">
          <div className="card-collection p-4">
            <TeamMembers />
            {/* hey what are you doing */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
