import PropTypes from 'prop-types';
import UserProfileField from './UserProfileField';

function UserProfileDetails({ user }) {
  if (user.role === 'MAHASISWA') {
    return (
      <>
        <UserProfileField label="Nama" value={user.name} />
        <UserProfileField label="NIM" value={user.nim} />
        <UserProfileField label="Kelas" value={user.kelas} />
        <UserProfileField label="Jurusan" value={user.jurusan} />
        <UserProfileField label="Fakultas" value={user.fakultas} />
        <UserProfileField label="Angkatan" value={user.angkatan} />
      </>
    );
  } else if (user.role === 'DOSEN') {
    return (
      <>
        <UserProfileField label="Nama" value={user.name} />
        <UserProfileField label="Gelar" value={user.gelar} />
        <UserProfileField label="NIP" value={user.nip} />
        <UserProfileField label="Kode" value={user.kode} />
        <UserProfileField label="Fakultas" value={user.fakultas} />
        <UserProfileField label="Thn Msk" value={user.thnMsk} />
      </>
    );
  } else {
    return null;
  }
}

UserProfileDetails.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
    name: PropTypes.string,
    nim: PropTypes.string,
    kelas: PropTypes.string,
    jurusan: PropTypes.string,
    fakultas: PropTypes.string,
    angkatan: PropTypes.string,
    gelar: PropTypes.string,
    nip: PropTypes.string,
    kode: PropTypes.string,
    thnMsk: PropTypes.string,
  }).isRequired,
};

export default UserProfileDetails;
