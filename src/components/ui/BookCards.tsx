// import auth from "@/auth/firebase.config";
// import { IBook } from '@/interfaces/bookInterface';
// import {
//   useGetWishlistQuery,
//   usePostWishlistMutation,
// } from "@/redux/features/books/bookApi";
import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Loader from "./Loader";

const BookCards = ({ data }: any) => {
//   const [postWishlist, { isSuccess, isError }] = usePostWishlistMutation();
//   const { data: wishlist, isLoading } = useGetWishlistQuery(undefined);
//   const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

//   useEffect(() => {
//     if (isSuccess) {
//       setShowSuccessToast(true);
//     }
//   }, [isSuccess]);

//   useEffect(() => {
//     if (isError) {
//       setShowErrorToast(true);
//     }
//   }, [isError]);

//   const handleAddToWishlist = (book: any) => {
//     const userEmail = user?.email;
//     const filter = wishlist?.data.filter(
//       (wl: any) => wl.title === book.title && wl.user === userEmail
//     );
//     console.log(filter);
//     if (filter?.length) {
//       setShowErrorToast(true);
//     } else {
//       const { title, author, genre, publication_date, image } = book;
//       postWishlist({
//         user: userEmail,
//         title,
//         author,
//         genre,
//         publication_date,
//         image,
//       });
//     }
//   };

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Book Added To Wishlist");
      setShowSuccessToast(false);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("Book Already Added In Wishlist");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);

//   if (isLoading) {
//     return <Loader />;
//   }

  return (
    <>
      {data?.map((book: any) => (
        <div className="w-full bg-base-100 shadow-xl" key={book._id}>
          <figure className="px-2 pt-2 cursor-pointer">
            {book.images?.[0]?.link ? (
              <img
                src={book.images[0].link}
                alt={book.title}
                className="rounded-xl w-60 mx-auto"
              />
            ) : (
              <span>No Image Available</span>
            )}
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">{book.title}</h2>
            <p>{book?.short_description}</p>
            <p>
              Price:{" "}
              <span className="line-through text-red-600">
                ৳ {book?.cutting_price}
              </span>{" "}
              <span className="text-red-600 font-bold">
                ৳ {book?.sale_price}{` (${book?.sale_unit})`}
              </span>{" "}
            </p>
            <button
              onClick={() => navigate(`/productdetails/${book._id}`)}
              className="btn btn-sm btn-error text-white"
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCards;
