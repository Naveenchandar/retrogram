export const validateForm = (
    dispatch,
    { emailId, username, password, confirmPassword }
) => {
    const isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailId);
    const isConfirmPassword =
        confirmPassword !== "" && password === confirmPassword;
    const isValidUsername = username !== "" && username?.trim();
    const isValidPassword = password !== "" && password?.trim();
    if (!isValidUsername) {
        dispatch({
            type: "NEWUSER_USERNAME_ERR",
            payload: "Please enter username",
        });
        return false;
    }

    if (!isValidEmail) {
        dispatch({
            type: "NEWUSER_EMAIL_ERR",
            payload: "Please enter valid email",
        });
        return false;
    }

    if (!isValidPassword) {
        dispatch({
            type: "NEWUSER_PASSWORD_ERR",
            payload:
                "Please enter valid password",
        });
        return false;
    }

    if (!isConfirmPassword) {
        dispatch({
            type: "NEWUSER_CONFIRMPASSWORD_ERR",
            payload: "Password does not match",
        });
        return false;
    }

    dispatch({
        type: "NEWUSER_VALUES",
        payload: {emailId, username, password, confirmPassword},
    });
    return true;
};