import { db } from "../db";
import { users } from "../db/schema";

export const registerUserService = async (payload: any) => {
  try {
    const { name, email, password } = payload;
    
    // Hash the password using Bun's built-in hashing
    const hashedPassword = await Bun.password.hash(password);
    
    // Insert user into database
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false };
  }
};
