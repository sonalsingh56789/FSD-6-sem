import { readFile } from "../utils/readFile.js";
const FILE = "../users.json";

const userLogin = async (userDetails) => {
    const { email, password } = userDetails;

    const users = await readFile(FILE);
    if (users.length === 0) {
        console.log("user is not registered.");
        return;
    }

    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        console.log("user is not registered.");
        return;
    }

    user[0].password === password ? console.log("Login Successful") :
        console.log("Incorrect password");
}

userLogin({ email: "dnilmos@addtoany.com", password: "tU4.g@/_n171i#)" });
userLogin({ email: "dnilmos@addtoany.com", password: "tu4.g@/_n1dfklgme7li#)" });
userLogin({ email: "dnilmos@addtodjhgany.com", password: "tu4.g@/_n171i#)" });