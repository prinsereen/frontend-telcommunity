import PropTypes from 'prop-types';

function UserProfileField({ label, value }) {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      <p className="font-bold text-xl flex-shrink-0 w-1/4">{label}</p>
      <input
        type="text"
        className="rounded-full border-2 pl-4 py-1 flex-grow ml-6"
        value={value}
        readOnly
      />
    </div>
  );
}

UserProfileField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default UserProfileField;
