const USER_UPDATE_NAME = 'USER_UPDATE_NAME';

export const updateName = (name) =>
    ({type: USER_UPDATE_NAME, name});

const getDefaultState = () =>
    immutable({
        name: ''
    });

export default (state = getDefaultState(), {type, name}) => {
    switch (type) {
        case USER_UPDATE_NAME:
            return state.set('name', name);
    }

    return state;
};
