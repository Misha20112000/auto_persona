const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    department: '',
    homeAddress: '',
};

export const personalDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state, name: action.name
            }
        }
        case CHANGE_PHONE_NUMBER: {
            return {
                ...state, phoneNumber: action.phoneNumber
            }
        }
        case CHANGE_EMAIL: {
            return {
                ...state, email: action.email
            }
        }
        case CHANGE_DEPARTMENT: {
            return {
                ...state, department: action.department
            }
        }
        case CHANGE_HOME_ADDRESS: {
            return {
                ...state, homeAddress: action.homeAddress
            }
        }
        default:
            return state;
    }
};

//AT
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_DEPARTMENT = 'CHANGE_DEPARTMENT';
const CHANGE_HOME_ADDRESS = 'CHANGE_HOME_ADDRESS';
//AC
export const changeName = (name: string) => ({type: CHANGE_NAME, name});
export const changePhoneNumber = (phoneNumber: string) => ({type: CHANGE_PHONE_NUMBER, phoneNumber});
export const changeEmail = (email: string) => ({type: CHANGE_EMAIL, email});
export const changeDepartment = (department: string) => ({type: CHANGE_DEPARTMENT, department});
export const changeHomeAddress = (homeAddress: string) => ({type: CHANGE_HOME_ADDRESS, homeAddress});
