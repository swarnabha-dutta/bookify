import { connectToDatabase } from "@/database/mongoose";
import { CreateBook } from "@/types";

export const createBook = async (data:CreateBook) => {
    try {
        await connectToDatabase();
    } catch (e) {
        console.error('Error creating a book', e);

        const slug generateSlug
        return {
            success: false,
            error: e,
        }
    }
}