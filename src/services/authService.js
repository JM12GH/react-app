 const API_URL= "http://localhost:3000";

const getUsers = async () => {
    const response= await fetch(`${API_URL}/users`);
    const users = await response.json();
    return users;
};

const login = async(email,password) =>{
    const users = await getUsers();
    const user = users.find(
        (user) =>
            user.email=== email &&
            user.password=== password
    ) ;
    if (!user) {
        throw new Error("Invalid credentials")
    }
    return user;
}

const register = async (userData) =>{

    const response = await fetch(`${API_URL}/users`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error("Registration failed");
    }

    return await response.json();
}
export { getUsers, login, register };