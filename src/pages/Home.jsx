import 'tailwindcss/tailwind.css';
import UserContext from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const user = {
  role: 'MAHASISWA', // Change this to 'DOSEN' or 'SUPERADMIN' to test different roles
  name: 'John Doe',
  nim: '12345678',
  kelas: 'A',
  jurusan: 'Informatika',
  fakultas: 'Teknik',
  angkatan: '2020',
  // Dosen specific data
  gelar: 'S.T., M.Kom.',
  nip: '87654321',
  kode: 'INF123',
  thnMsk: '2018',
};

function Home() {
  return (
    <UserContext.Provider value={user}>
      <div className="flex">
        <Sidebar user={user} />
        <MainContent user={user} />
      </div>
    </UserContext.Provider>
  );
}

export default Home;
