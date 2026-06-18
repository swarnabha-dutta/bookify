import { connectToDatabase } from "@/database/mongoose";
import { CreateBook } from "@/types";
import { generateSlug } from "@/lib/utils";


export const createBook = async (data:CreateBook) => {
    try {
        await connectToDatabase();
    } catch (e) {
        console.error('Error creating a book', e);

        const slug = generateSlug(data.title);
        
        return {
            success: false,
            error: e,
        }
    }
}