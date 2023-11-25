let signupError = null;

const handleSignup = async (email, password, userType) => {
    try {
        const response = await fetch(
            "https://medtrackerpro.onrender.com/api/auth/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    userType,
                }),
            }
        );
        const data = await response.json();
        if (response.status === 201) {
            signupError = null
            return true
        } else if (response.status === 404 && data.message === "Invalid or already verified email address") {
            signupError = "Email already in use"
            return false
        } else {
            signupError = "Something went wrong!"
            return false
        }
    } catch (err) {
        console.error("Error signing up user", err.message);
        signupError = "something went wrong!"
        return false
    }
}

export { handleSignup, signupError }