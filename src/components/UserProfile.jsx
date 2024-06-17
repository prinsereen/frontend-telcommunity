import PropTypes from 'prop-types';
import UserProfileDetails from './UserProfileDetails';
import profile from "../assets/img/nav-profile.png"

function UserProfile({ user }) {
  return (
    <div className="bg-white rounded-3xl shadow h-full p-2">
      <div className="flex items-center justify-start shadow rounded-3xl w-full py-2 px-3 mb-2">
        <div className=" rounded-full bg-gradient-to-b from-red to-orange mr-7">
          <img src={profile} alt="nav-profile" />
        </div>
        <div>
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="font-bold text-xl">{user.role}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start shadow rounded-3xl w-full py-2 px-3 mb-9">
        <p className="font-bold text-3xl mb-2">Profile</p>
        <div className="flex flex-col items-center justify-start h-full w-full">
          <UserProfileDetails user={user} />
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
