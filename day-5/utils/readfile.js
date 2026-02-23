import fs from "fs/promises";

export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");

        if (!data) {
            return [];
        }

        return JSON.parse(data);
    } catch (error) {
        // If file does not exist, return empty array
        if (error.code === "ENOENT") {
            return [];
        }

        console.error("Error reading file:", error.message);
        return [];
    }
};