let signupError = null; // This variable is used to store the error message if the signup fails.
/**
 * Function handles user signup by making a request to the server.
 * @param {string} email - The email of the user to sign up.
 * @param {string} password - The password for the user account.
 * @param {string} userType - The type of user being signed up.
 * @returns {Promise<boolean>} A Promise that resolves to true if signup is successful, and false otherwise. Also sets the signupError variable for error handling.
 */
const handleSignup = async (email, password, userType) => {
    try {
        // Send a POST request to the API to sign up the user.
        const response = await fetch("https://medtrackerpro.onrender.com/api/auth/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                userType,
            }),
        });

        // Parse the JSON response from the API.
        const data = await response.json();

        // Check the status of the response.
        if (response.status === 201) {
            // The user was signed up successfully.
            signupError = null; // Clear the error message.
            return true; // Return true to indicate that the user was signed up successfully.
        } else if (response.status === 404 && data.message === "Invalid or already verified email address") {
            // The email address is invalid or has already been verified.
            signupError = "Email already in use"; // Set the error message.
            return false; // Return false to indicate that the email address is invalid or has already been verified.
        } else {
            // Something went wrong with the API request.
            signupError = "Something went wrong!"; // Set the error message.
            return false; // Return false to indicate that something went wrong.
        }
    } catch (err) {
        // An error occurred while making the API request.
        console.error("Error signing up user", err.message); // Log the error to the console.
        signupError = "something went wrong!"; // Set the error message.
        return false; // Return false to indicate that something went wrong.
    }
};

export { handleSignup, signupError };