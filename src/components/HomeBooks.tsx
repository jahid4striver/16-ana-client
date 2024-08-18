import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import BookCards from "./ui/BookCards";

const HomeBooks = () => {
    const { data } = useGetBooksQuery(undefined);

    const books=data?.data?.slice(0,4)
    return (
        <div className="my-8">
            <h1 className="text-xl text-center my-4">Latest Collections</h1>
           <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-2 mx-auto">
           <BookCards data={books}/>
           </div>
        </div>
    );
};

export default HomeBooks;