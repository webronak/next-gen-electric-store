export const SetUser = (user) => {
    return {
        type:'SET_USER',
        payload:user,
    }
}

export const StartSignFilure = (error) => {
    return {
        type:'SIGNIN_FAILURE',
        payload:error
    }
}

export const StartSignInWithGoogle = () => {
    return {
        type:'START_SIGN_IN_WITH_GOOGLE',
    }
}

export const StartSignInWithEmailPass = ({ email, pass }) => {
    return {
        type:'START_SIGN_IN_WITH_EMAIL',
        payload:{ email, pass }
    }
}


export const StartSignOut = () => {
    return {
        type:'START_SIGN_OUT',
    }
}

export const SuccessSignOut = () => {
    return {
        type:'SUCCESS_SIGN_OUT',
        payload:null
    }
}

