import PropTypes from 'prop-types';
import option from "../assets/icon/option.png"
import plus from "../assets/icon/plus.png"

function Channels({ user, classChannels, ormawaChannels }) {
  return (
    <div className="bg-white rounded-3xl shadow h-full p-5">
      <div className="flex flex-col items-center justify-start h-full">
        <div className="flex items-center bg-[#C50000] justify-between rounded-full bg-gradient-to-b from-primary to-dark-red w-full px-7 py-3 mb-6">
          <p className="text-white text-3xl">Channels</p>
          <img src={option} alt="option" />
        </div>
        <div className="grid grid-rows-2 gap-6 w-full h-full">
          <div className="w-full">
            <div className="w-full mb-6">
              <p className="text-secondary-grey font-bold text-2xl mx-2">CLASS</p>
              <hr className="w-full border-2" />
            </div>
            <div className="grid grid-cols-5 gap-x-4 gap-y-6">
              {classChannels.map(channel => (
                <a
                  href={`/chat(class_channel_id=${channel.id})`}
                  key={channel.id}
                  className="flex flex-col items-center justify-start text-center hover:cursor-pointer"
                >
                  <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                    <img src={channel.logo} alt="" className="h-20 w-20" />
                  </div>
                  <p className="font-medium text-lg">{channel.class_name}</p>
                </a>
              ))}
              {user.role !== 'SUPERADMIN' && (
                <a href="/add-class" className="flex flex-col items-center justify-start text-center cursor-pointer">
                  <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                    <div className="rounded-full bg-white flex items-center justify-center h-20 w-20">
                      <img src={plus} alt="plus" />
                    </div>
                  </div>
                  <p className="font-medium text-lg">+ ADD CLASS</p>
                </a>
              )}
            </div>
          </div>

          {user.role !== 'DOSEN' && (
            <div className="w-full">
              <div className="w-full mb-6">
                <p className="text-secondary-grey font-bold text-2xl mx-2">ORMAWA</p>
                <hr className="w-full border-2" />
              </div>
              <div className="grid grid-cols-5 gap-x-4 gap-y-6">
                {ormawaChannels.map(channel => (
                  <a
                    href={`/chat(ormawa_channel_id=${channel.id})`}
                    key={channel.id}
                    className="flex flex-col items-center justify-start text-center hover:cursor-pointer"
                  >
                    <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                      <img src={channel.logo} alt="" className="h-20 w-20" />
                    </div>
                    <p className="font-medium text-lg">{channel.channel_name}</p>
                  </a>
                ))}
                {user.role !== 'SUPERADMIN' && (
                  <a href="/add-ormawa" className="flex flex-col items-center justify-start text-center cursor-pointer">
                    <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                      <div className="rounded-full bg-white flex items-center justify-center h-20 w-20">
                        <img src={plus} alt="plus" />
                      </div>
                    </div>
                    <p className="font-medium text-lg">+ ORMAWA</p>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Channels.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
  classChannels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    class_name: PropTypes.string.isRequired,
  })).isRequired,
  ormawaChannels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    channel_name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Channels;
