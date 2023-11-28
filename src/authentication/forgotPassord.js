// Represents an error that may occur during the `forgotPassword` function execution.
let forgotPasswordError = null;
/**
 * The `forgotPassword` function sends a request to the server to initiate the password reset process.
 * @async
 * @function
 * @param {string} email - The email address associated with the user account.
 * @param {string} userType - The type of user (e.g., "patient" or "healthProfessional").
 * @returns {Promise<boolean>} A Promise that resolves to `true` if the request is successful, `false` otherwise.
 */

const forgotPassword = async (email, userType) => {
    try {
        // Send POST request to the forget password API
        const response = await fetch("https://medtrackerpro.onrender.com/api/auth/user/forgetPassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, userType }),
        });
        // Extract response data
        const data = await response.json();
        // Handle successful response
        if (response.status === 201) {
            forgotPasswordError = null; // Clear error message
            return true; // Indicate successful request
        }
        // Handle "Email not found" error
        else if (response.status === 404 && data.error === "Email not found") {
            forgotPasswordError = "Invalid Email Address"; // Set error message
            return false; // Indicate failed request
        }
        // Handle other errors
        else {
            forgotPasswordError = "Something went wrong"; // Set generic error message
            return false; // Indicate failed request
        }
    }
    // Handle network or other errors
    catch (err) {
        console.error(err.message); // Log error message to console
        return false; // Indicate failed request
    }
};

// Export functions for external use
export { forgotPassword, forgotPasswordError };