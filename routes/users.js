
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "age": 35,
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "age": 32,
    }
]

export const getUser = (req, res, then) => {
    res.send(users);
    // then.next();
};

export const getUserById = (req, res, then) => {
    try {
        const user = users.find(user => user.id === parseInt(req.params.id));
        if (!user) {
            res.send("User Not Found!");
        } else {
            res.send(user);
        }
    } catch (error) {
        res.send(error);
    }
    // then.next();
}


export const addUser = (req, res, then) => {
    const user = {
        id: users.at(users.length - 1).id + 1,
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
    };

    try {
        users.push(user);
        res.send("Successfully added user!");
    } catch (error) {
        res.send("Error adding user!");
    }
    // then.next();
}

export const deleteUser = (req, res, then) => {
    try {
        users = users.filter(user => user.id !== parseInt(req.params.id));
        res.send("Successfully deleted user! with Id: " + req.params.id);
    } catch (error) {
        res.send("Error deleting user!");
    }
    // then.next();
}

export const updateUser = (req, res, then) => {
    try {
        const user = users.find(user => user.id === parseInt(req.params.id));
        if (!user) {
            res.send("User Not Found!");
        } else {
            user.name = req.body.name;
            user.username = req.body.username;
            user.age = req.body.age;
            res.send("Successfully updated user!");
        }
    } catch (error) {
        res.send("Error updating user!");
    }
    // then.next();
}

