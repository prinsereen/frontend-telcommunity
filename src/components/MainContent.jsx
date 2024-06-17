import PropTypes from 'prop-types';
import Groups from './Groups';
import RecentlyChatted from './RecentlyChatted';
import AdminRequests from './AdminRequests';
import Channels from './Channels';
import UserProfile from './UserProfile';
import himaif from '../assets/img/groups/himaif.png';
import telu from '../assets/img/groups/telu.png';
import class1Logo from '../assets/img/groups/himaif.png';
import class2Logo from '../assets/img/groups/telu.png'; 
import ormawa1Logo from '../assets/img/channels/alfath.png'; 
import ormawa2Logo from '../assets/img/channels/alfath.png'; 

function MainContent({ user }) {
  const groups = [
    { id: 1, logo: himaif, group_name: 'IF-45-05' },
    { id: 2, logo: telu, group_name: 'Informatika 2021' },
  ];

  const recentChats = [
    { id: 1, receiver: { id: 1, name: 'User 1' } },
    { id: 2, receiver: { id: 2, name: 'User 2' } },
  ];

  const requests = [
    {
      id: 1,
      user: { name: 'Request User 1' },
      ormawa: { logo: telu, ormawa_name: 'Ormawa 1' },
    },
  ];

  const classChannels = [
    { id: 1, logo: class1Logo, class_name: 'Class 1' },
    { id: 2, logo: class2Logo, class_name: 'Class 2' },
  ];

  const ormawaChannels = [
    { id: 1, logo: ormawa1Logo, channel_name: 'Ormawa 1' },
    { id: 2, logo: ormawa2Logo, channel_name: 'Ormawa 2' },
  ];

  return (
    <div className="grid grid-cols-7 gap-5 ">
      <div className="col-span-2 grid  ">
        {user.role === 'MAHASISWA' && <Groups groups={groups} />}
        {user.role !== 'SUPERADMIN' && <RecentlyChatted recentChats={recentChats} />}
        {user.role === 'SUPERADMIN' && <AdminRequests requests={requests} />}
      </div>
      <div className="col-span-3">
        <Channels user={user} classChannels={classChannels} ormawaChannels={ormawaChannels} />
      </div>
      <div className="col-span-2">
        <UserProfile user={user} />
      </div>
    </div>
  );
}

MainContent.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainContent;
