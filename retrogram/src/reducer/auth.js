const initialState = {
    user: {
        username: '',
        password: ''
    },
    loading: false,
    signupLoading: false,
    error: '',
    newUser: {
        emailErr: '',
        usernameErr: '',
        passwordErr: '',
        confirmPasswordErr: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    },
    signUpErr: ''
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_USER': {
            return {
                ...state,
                user: { ...state.user, username: payload?.username, password: payload?.password },
                loading: true,
                error: ''
            }
        }
        case 'LOGIN_ERROR': {
            return { ...state, error: payload }
        }
        case "SET_LOADING": {
            return { ...state, loading: payload };
        }
        case 'NEWUSER_EMAIL_ERR': {
            return { ...state, newUser: { emailErr: payload } }
        }
        case 'NEWUSER_USERNAME_ERR': {
            return { ...state, newUser: { usernameErr: payload } }
        }
        case 'NEWUSER_PASSWORD_ERR': {
            return { ...state, newUser: { passwordErr: payload } }
        }
        case 'NEWUSER_CONFIRMPASSWORD_ERR': {
            return { ...state, newUser: { confirmPasswordErr: payload } }
        }
        case 'SIGNUP_ERR': {
            return { ...state, signUpErr: payload }
        }
        case 'SIGNUP_SET_LOADING': {
            return { ...state, signupLoading: payload }
        }
        case 'NEWUSER_VALUES': {
            const { emailId, username, password, confirmPassword } = payload;
            return {
                ...state, newUser: {
                    ...state.newUser, email: emailId, username, password, confirmPassword,
                    emailErr: '', usernameErr: '', passwordErr: '', confirmPasswordErr: ''
                }, signUpErr: ''
            }
        }
        default: {
            throw new Error('Action type not found');
        }
    }
}

export { initialState, authReducer };