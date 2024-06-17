import PropTypes from 'prop-types';
import option from "../assets/icon/option.png"

function Groups({ groups }) {
  return (
    <div className="bg-white rounded-3xl p-2 pb-0 shadow h-full">
      <div className="flex flex-col items-center justify-start h-full">
        <div className="flex items-center  bg-[#C50000] justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
          <p className="text-white text-2xl ">Groups</p>
          <img src={option} alt="option" />
        </div>
        <div className="px-7 w-full">
          {groups.map(group => (
            <a href={`/chat(group_id=${group.id})`} key={group.id} className="flex items-center justify-start w-full mb-7">
              <img src={group.logo} alt="group logo" className="shadow rounded-full mr-2" />
              <div className="py-7 rounded-3xl shadow text-center w-full">
                <p className="font-bold text-2xl">{group.group_name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

Groups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    group_name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Groups;
