import PropTypes from "prop-types";
/**
 * Functional component for rendering an error message related to OTP (One-Time Password).
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to be displayed.
 * @returns {JSX.Element} - React component
 */
export default function OtpError({ message }) {
  return (
    <aside className="text-white py-2 px-4 fixed sm:top-12 top-20 sm:right-10 right-2 bg-red-500 sm:text-lg text-base font-medium rounded-lg transition-all duration-300">
      {message}
    </aside>
  );
}

OtpError.propTypes = {
  message: PropTypes.string,
};
