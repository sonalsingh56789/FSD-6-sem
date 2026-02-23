import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";

const FILE = "../users.json";

const register = async (users, userDetails) => {
    const updateData = [...users, userDetails];
    const response = await writeFile(FILE, updateData);
    console.log(response.message);
    return;
};

const userRegistration = async (userDetails) => {
    const { name, email, password, gender } = userDetails;

    if (!name || !email || !password || !gender) {
        console.log("All fields are required.");
        return;
    }

    const users = await readFile(FILE);
    if (users.length >= 0) {
        register(users, userDetails);
    }
};
    const existingUser = users.filter((u) => u.email === email);

    if (existingUser.length !== 0) {
        console.log("user is already registered");
        return;
    }

     register(users,usersDetails);