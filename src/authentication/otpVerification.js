let otpverifError = null;

const verifyOtp = async (email, userType, otp) => {
    try {
        const response = await fetch("https://medtrackerpro.onrender.com/api/auth/user/verifyOTP", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                userType,
                otp,
            }),
        })
        const data = await response.json();
        console.log(data);
        if (response.status === 200 && data.message === "OTP verified successfully") {
            otpverifError = null;
            return true;
        } else if (response.status === 404 && data.message === "Invalid email or already verified OTP") {
            otpverifError = "Invalid OTP Code or already verified";
            return false;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        otpverifError(err)
        return false;
    }
}

export { otpverifError, verifyOtp }