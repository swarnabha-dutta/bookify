import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { sampleBooks } from "@/lib/constants";
import BookCard from "@/components/BookCard";

const steps = [
  {
    number: "1",
    title: "Upload PDF",
    description: "Add your book file",
  },
  {
    number: "2",
    title: "AI Processing",
    description: "We analyze the content",
  },
  {
    number: "3",
    title: "Voice Chat",
    description: "Discuss with AI",
  },
];

export default function Page() {
  return (
    <main className="wrapper container">
      <HeroSection />

      <div className="library-books-grid">
        {
          sampleBooks.map((book)=>(
            <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
          ))
        }

      </div>
    </main>
  );
}
