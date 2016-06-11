const USER_UPDATE_NAME = 'USER_UPDATE_NAME';
const USER_UPDATE_SURNAME = 'USER_UPDATE_SURNAME';
const USER_UPDATE_SEX = 'USER_UPDATE_SEX';

export const updateName = (name) =>
    ({type: USER_UPDATE_NAME, name});

export const updateSurname = (surname) =>
    ({type: USER_UPDATE_SURNAME, surname});

export const updateSex = (sex) =>
    ({type: USER_UPDATE_SEX, sex});

const getDefaultState = () =>
    immutable({
        name: '',
        surname: '',
        sex: 'male'
    });

export default (state = getDefaultState(), {type, name, surname, sex}) => {
    switch (type) {
        case USER_UPDATE_NAME:
            return state.set('name', name);

        case USER_UPDATE_SURNAME:
            return state.set('surname', surname);

        case USER_UPDATE_SEX:
            return state.set('sex', sex);
    }

    return state;
};
