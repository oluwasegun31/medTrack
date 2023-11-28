// This variable is used to store the error message if the OTP verification fails.
let resetOtpError = null;
/**
 * Function Verifies the OTP for a user to reset password by making a request to the server.
 * @param {string} email - The email of the user.
 * @param {string} userType - The type of user.
 * @param {string} otp - The OTP (One-Time Password) code to be verified.
 * @returns {Promise<boolean>} A Promise that resolves to true if OTP is verified successfully, and false otherwise. Also sets the resetOtpError variable for error handling.
 */
const resetVerifyOtp = async (email, userType, otp) => {
    // This function is used to verify the OTP that the user has entered.
    // It takes three parameters:
    // - email: The email address of the user.
    // - userType: The type of user (e.g., 'patient', 'doctor', 'admin').
    // - otp: The OTP that the user has entered.

    try {
        // Send a POST request to the API to verify the OTP.
        const response = await fetch("https://medtrackerpro.onrender.com/api/auth/user/verifyResetOTP", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                userType,
                otp,
            }),
        });
        // Parse the JSON response from the API.
        const data = await response.json();
        // Check the status of the response.
        if (response.status === 200 && data.message === "OTP verified successfully") {
            // The OTP was verified successfully.
            resetOtpError = null; // Clear the error message.
            return true; // Return true to indicate that the OTP was verified successfully.
        } else if (response.status === 404 && data.message === "Invalid email or already verified OTP") {
            // The OTP is invalid or has already been verified.
            resetOtpError = "Invalid OTP Code or already verified"; // Set the error message.
            return false; // Return false to indicate that the OTP is invalid or has already been verified.
        } else {
            // Something went wrong with the API request.
            resetOtpError = "Something went wrong"; // Set the error message.
            return false; // Return false to indicate that something went wrong.
        }
    } catch (err) {
        // An error occurred while making the API request.
        console.error(err); // Log the error to the console.
        return false; // Return false to indicate that something went wrong.
    }
};

export { resetOtpError, resetVerifyOtp };