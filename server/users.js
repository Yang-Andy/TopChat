let allUsers = [];

const addUser = ({ id, name }) => {
    name = name.trim();

    const nameExists = allUsers.find((user) => { user.name === name });

    if (nameExists) {
        return { error: 'Name is Taken Already' };
    }

    const user = { id: id, name: name };
    allUsers.push(user);
    return user;
}

const getUser = (id) => {
    //console.log(id)
    //console.log(allUsers.find((user) => { return (user.id === id) }));

    return allUsers.find((user) => { return (user.id === id) })
};

const removeUser = (id) => {
    const index = allUsers.findIndex((user) => { user.id === id })

    if (index !== -1) {
        return allUsers.splice(index, 1)[0];
    }
}

const getAllUsers = () => allUsers;

module.exports = { addUser, removeUser, getAllUsers, getUser };