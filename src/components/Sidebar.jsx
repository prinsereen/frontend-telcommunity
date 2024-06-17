import PropTypes from 'prop-types';
import navProfile from "../assets/img/nav-profile.png"
import home from "../assets/icon/home.png"
import chat from "../assets/icon/chat.png"
import helpdesk from "../assets/icon/helpdesk.png"
import logout from "../assets/icon/logout.png"

function Sidebar({ user }) {
  return (
    <div className="flex flex-col border items-center justify-between h-full bg-white rounded-3xl py-14 w-40 shadow mr-5 ">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="p-1 rounded-full bg-gradient-to-b from-red to-orange mb-12">
          <img src={navProfile} alt="nav-profile" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <a href="/home" className="w-full py-6 bg-gradient-to-b from-gray-300 to-white">
            <img src={home} alt="home" className="mx-auto" />
          </a>
          <a href="/chat" className="w-full py-6">
            <img src={chat} alt="chat" className="mx-auto" />
          </a>
          {user.role === 'MAHASISWA' && (
            <a href="/helpdesk" className="w-full py-6">
              <img src={helpdesk} alt="helpdesk" className="mx-auto" />
            </a>
          )}
        </div>
      </div>
      <a href="/logout" className="cursor-pointer">
        <img src={logout} alt="logout" />
      </a>
    </div>
  );
}

Sidebar.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default Sidebar;
