import PropTypes from 'prop-types';
import option from "../assets/icon/option.png"
import decline from "../assets/icon/decline.png"
import approve from "../assets/icon/approve.png"

function AdminRequests({ requests }) {
  return (
    <div className="bg-white rounded-3xl p-2 shadow h-full">
      <div className="flex flex-col items-center justify-start h-full">
        <div className="flex items-center bg-[#C50000] justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
          <p className="text-white text-2xl">Ketua Ormawa Requests</p>
          <img src={option} alt="option" />
        </div>
        <div className="px-7 w-full">
          {requests.map(request => (
            <div key={request.id} className="flex items-center justify-start w-full mb-7">
              <img src={request.ormawa.logo} alt="ormawa logo" className="shadow rounded-full mr-2" />
              <div className="flex items-center justify-between rounded-3xl shadow text-left w-full p-5">
                <div>
                  <p className="font-bold text-xl">{request.user.name}</p>
                  <p className="font-medium text-MD">as Ketua {request.ormawa.ormawa_name}</p>
                </div>
                <div className="flex items-center justify-center">
                  <a href={`/set-ketua-ormawa(ketua_ormawa_id=${request.id}, action='decline')`} className="mr-1 cursor-pointer">
                    <img src={decline} alt="decline" />
                  </a>
                  <a href={`/set-ketua-ormawa(ketua_ormawa_id=${request.id}, action='approve')`} className="cursor-pointer">
                    <img src={approve} alt="approve" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

AdminRequests.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    ormawa: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      ormawa_name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default AdminRequests;
