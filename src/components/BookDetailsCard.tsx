// import auth from "@/auth/firebase.config";
// import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import { useRef } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import image1 from "../assets/images/1.jpeg";
// import image2 from "../assets/images/2.jpeg";
// import image3 from "../assets/images/3.jpeg";
// import image4 from "../assets/images/4.jpeg";
// import image5 from "../assets/images/5.jpeg";
// import image6 from "../assets/images/6.jpeg";
// import image7 from "../assets/images/7.jpeg";
// import image8 from "../assets/images/8.jpeg";


interface BookDetailsCardProps {
  data: any;
}

import BillingDetailsCard from "./BillingDetailsCard";

const BookDetailsCard: React.FC<BookDetailsCardProps> = ({ data }) => {
  //   const [user] = useAuthState(auth);
  //   const book = data?.data;
  //   const navigate = useNavigate();
  //   const [deleteBook] = useDeleteBookMutation();

  //   const handleDeleteBook = (id: string) => {
  //     const proceed = window.confirm("Are You Sure Want To Delete");
  //     if (proceed) {
  //       deleteBook(id);
  //       toast("Book Delete Successful");
  //       navigate("/allbooks");
  //     }
  //   };

  console.log(data);

  const targetRef = useRef<HTMLDivElement>(null);
  const handleJumpTo = () => {
    const targetElement = targetRef.current;

    // Check if targetElement is not null before accessing scrollIntoView()
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className=" bg-base-100 shadow-xl p-3 h-full flex flex-col justify-center items-center">
        <div className="mx-auto">
          <figure className="px-2 pt-2">
            {/* <img src={book?.image} alt={book?.title} className="rounded-xl  w-60" /> */}
            <div className="carousel carousel-center h-80 max-w-md p-4 space-x-4 bg-slate-100 rounded-box">
              {data?.images?.map((item:any) => (
                <div className="carousel-item">
                  <img src={item?.link} className="rounded-box" />
                </div>
              ))}
            </div>
          </figure>
        </div>
        <div className="mx-auto">
          {/* <h2 className="card-title">{book?.title}</h2> */}
          <div className="text-center my-4">
            {" "}
            <h2 className="card-title">
              {data?.title}
            </h2>
          </div>
          <p className="mb-4">
            <span className="line-through text-red-600">৳ {data?.cutting_price}</span>{" "}
            <span className="text-red-600 font-bold">
              ৳ {data?.sale_price}{` (${data?.sale_unit})`}
            </span>{" "}
            <button
              onClick={handleJumpTo}
              className="btn btn-error btn-sm text-white font-bold"
            >
              অর্ডার করুন
            </button>
          </p>
          <p className="text-justify">
            {" "}
            {data?.full_description}
          </p>
          {/* <p>Publication Date: {book?.publication_date}</p>
          <p>Genre: {book?.genre}</p>
          {user?.email && (
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => navigate(`/edit/${book?._id}`)}
                className="btn btn-sm btn-primary text-white font-bold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteBook(book?._id)}
                className="btn btn-sm btn-error text-white font-bold"
              >
                Delete
              </button>
            </div>
          )} */}

          <div className="overflow-x-auto mt-8">
            {/* <table className="table">
              <caption>বিস্তারিত</caption>
              <tbody>
               
                <tr>
                  <td>নাম</td>
                  <td>Fairy Lights Smart RGBIC</td>
                </tr>
                <tr>
                  <td>রং</td>
                  <td>RGB (16M Colors) বিভিন্ন কালার</td>
                </tr>
                <tr>
                  <td>অ্যানিমেশন</td>
                  <td>৫৮ প্রকার</td>
                </tr>
                <tr className="hover">
                  <td>ব্র্যান্ড</td>
                  <td>NEON</td>
                </tr>
               
                <tr>
                  <td>পাওয়ার</td>
                  <td>USB (DC 5-12V)</td>
                </tr>
                <tr>
                  <td>কন্ট্রোল</td>
                  <td>বাটন, রিমোট, মোবাইল অ্যাপস</td>
                </tr>
                <tr>
                  <td>ব্লুটুথ (Bluetooth)</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>স্পেশাল ফিচার</td>
                  <td>কম এনার্জি খরচ, আলো কমানো বাড়ানো, ওয়াটারপ্রুফ।</td>
                </tr>
                <tr>
                  <td>স্থায়িত্ব</td>
                  <td>১০০০০ ঘণ্টা</td>
                </tr>
                <tr>
                  <td>তৈরিকৃত দেশ</td>
                  <td>চায়না</td>
                </tr>
              </tbody>
            </table> */}
            <div ref={targetRef}>
              <BillingDetailsCard data={data} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <h3 className="font-bold">
          {book?.reviews?.length ? "Reviews" : "No Review Yet"}
        </h3>
        {book?.reviews?.map((r: any) => (
          <p className="shadow-md p-2">
            @{r.reviewdBy}-{r.review}
          </p>
        ))}
      </div> */}
    </>
  );
};

export default BookDetailsCard;
