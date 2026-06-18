import { CreateBook } from "@/types";

export const createBook = async (data:CreateBook) => {
    try {
        await 
    } catch (e) {
        console.error('Error creating a book', e);

        return {
            success: false,
            error: e,
        }
    }
}