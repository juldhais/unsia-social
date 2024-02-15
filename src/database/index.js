const database =
{
    register: (user) => {
        const userJson = JSON.stringify(user);
        localStorage.setItem(user.email, userJson);
    },

    login: (email, password) => {
        const userJson = localStorage.getItem(email);
        const user = JSON.parse(userJson);
        if (password != user.password) return null;
        localStorage.setItem("currentUser", userJson);
        return user;
    },

    getCurrentUser: () => {
        const userJson = localStorage.getItem("currentUser");
        const user = JSON.parse(userJson);
        return user;
    }
}

export default database;