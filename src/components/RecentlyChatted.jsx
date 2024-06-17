import PropTypes from 'prop-types';
import option from "../assets/icon/option.png"
import telu from "../assets/img/groups/telu.png"

function RecentlyChatted({ recentChats }) {
  return (
    <div className="bg-white rounded-3xl p-2 mt-2 shadow h-full row-span-2">
      <div className="flex flex-col items-center justify-start h-full">
        <div className="flex bg-[#C50000]  items-center justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
          <p className="text-white text-2xl">Recently Chatted</p>
          <img src={option} alt="option" />
        </div>
        <div className="px-7 w-full">
          {recentChats.map(chat => (
            <a href={`/chat?user_id=${chat.receiver.id}`} key={chat.id} className="flex items-center justify-start w-full mb-7">
              <img src={telu} alt="receiver" className="shadow rounded-full mr-2" />
              <div className="py-7 rounded-3xl shadow text-center w-full">
                <p className="font-bold text-2xl">{chat.receiver.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

RecentlyChatted.propTypes = {
  recentChats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    receiver: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default RecentlyChatted;
