import Sidebar from '../components/Sidebar';
import option from "../assets/icon/option.png"

const user = {
  role: 'MAHASISWA', // Example user role
  name: 'John Doe',
};

function Helpdesk() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Sidebar user={user} />
      <div className="bg-white rounded-3xl shadow h-full w-full px-10 pt-6 pb-10">
        <div className="flex flex-col items-center justify-start h-full">
          {/* Card Header */}
          <div className="flex bg-[#C50000] items-center justify-between w-full bg-gradient-to-b from-primary to-dark-red px-6 py-3 rounded-3xl mb-16">
            <p className="text-white text-4xl font-bold w-full text-center">Helpdesk TelCommunity</p>
            <img src={option} alt="option" />
          </div>
            <div className="flex flex-col items-center justify-center mx-auto my-auto">
              <a href="https://wa.me/+6281358282255" target="_blank" rel="noopener noreferrer"
                className="text-center rounded-full text-white bg-green-500 text-4xl w-[700px] py-5">
                Hubungi Kami
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Helpdesk;
