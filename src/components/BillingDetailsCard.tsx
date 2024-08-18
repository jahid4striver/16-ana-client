import { usePostOrderMutation } from "@/redux/features/books/bookApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import image1 from "../assets/images/1.jpeg";
// import ReactPixel from 'react-facebook-pixel';
import ReactPixel from "react-facebook-pixel";
import { useNavigate } from "react-router-dom";

// const options: any = {
//   autoConfig: true,
//   debug: false,
//   // Add other properties as needed
// };

// ReactPixel?.init("909441593958982", options);

interface BookDetailsCardProps {
  data: any;
}

const BillingDetailsCard: React.FC<BookDetailsCardProps> = ({ data }) => {
  // console.log(data);

  const [postOrder, { isError, isSuccess }] = usePostOrderMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm();
  const navigate = useNavigate();
  //   const [price, setPrice] = useState(790);
  // console.log(data);

  let price = parseInt(data?.sale_price);
  // const customerName = data?.name;
  const productName = data?.title;

  let delivary = 100;
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccessToast(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setShowErrorToast(true);
    }
  }, [isError]);

  const handlePlus = (event: any) => {
    event.preventDefault();
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(price * newQuantity);
  };

  const handleMinus = (event: any) => {
    event.preventDefault();
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(price * newQuantity);
    }
  };

  const handleChangeQuantity = (event: any) => {
    const qyt = parseInt(event?.target.value);
    setQuantity(qyt);
  };

  const onSubmit = (data: any) => {
    console.log(data.phone);

    if (data?.phone?.includes("01")) {
      postOrder({
        productName: productName,
        totalPrice: totalPrice + delivary,
        ...data,
      });
      ReactPixel.track("Purchase", {});
      reset();

      const token = `92310756091678413369ac9dc34ff7599524a6ea84a77094beb1`;
      const number = data?.phone;
      const msg = `প্রিয় ${data.name}, 16 Ana তে অর্ডার করার জন্য আপনাকে ধন্যবাদ।`;
      const message = encodeURI(msg);

      const url = `https://api.greenweb.com.bd/api.php?token=${token}&to=${number}&message=${message}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      navigate("/thank-you_page--after_sale");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("মোবাইল নম্বর সঠিক নয়");
    }
  };

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("আপনার অর্ডার কনফার্ম হয়েছে");
      setShowSuccessToast(false);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("আপনার অর্ডার ফেইল হয়েছে");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);

  return (
    <div className="my-4">
      <h1 className="text-md text-center bg-red-600 p-3 text-white rounded-xl">
        Billing Details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex justify-center items-center flex-col"
      >
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              আপনার নাম <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="আপনার নাম লিখুন"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              মোবাইল নং <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="আপনার মোবাইল নং লিখুন"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              ঠিকানা <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            {...register("address")}
            type="text"
            placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              সাইজ <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            {...register("size")}
            type="text"
            placeholder="প্যান্ট এর সাইজ লিখুন"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <h3 className="text-left mt-4">অর্ডার বিবরণ</h3>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="border border-b-red-600">
                  <img width={100} src={data?.images[0]?.link} alt="" />
                  <p>
                    {data?.title} <br />
                    <span className="text-red-600 font-bold">
                      {` (${quantity + " " + data?.sale_unit})`} ৳{totalPrice}
                    </span>
                  </p>
                </td>
                <td className="border border-b-red-600">
                  <div className="form-control w-40">
                    <label className="label">
                      <span className="label-text">পরিমাণ</span>
                    </label>
                    <div className="flex justify-center items-center">
                      <span className="mr-2">
                        <button
                          onClick={handleMinus}
                          className="btn btn-sm btn-error text-white"
                        >
                          -
                        </button>
                      </span>
                      <input
                        {...register("quantity")}
                        onChange={handleChangeQuantity}
                        type="number"
                        value={quantity}
                        min={1}
                        placeholder="পরিমাণ"
                        className="input input-bordered text-center w-full max-w-xs"
                        required
                      />
                      <span className="ml-2">
                        <button
                          onClick={handlePlus}
                          className="btn btn-sm btn-error text-white"
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border">পণ্যের দাম</td>
                <td className="border">৳ {totalPrice}</td>
              </tr>
              <tr>
                <td className="border">ডেলিভারি ফি</td>
                <td className="border">৳ {delivary}</td>
              </tr>
              <tr>
                <td className="border border-b-red-600 font-bold">সর্বমোট</td>
                <td className="border border-b-red-600 font-bold">
                  ৳ {totalPrice + delivary}
                </td>
              </tr>
              <tr>
                <td className="border border-b-red-600 font-bold">
                  পেমেন্ট মেথড
                </td>
                <td className="border border-b-red-600 font-bold">
                  ক্যাশ অন ডেলিভারি
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="btn btn-md btn-error text-white my-4 rounded-md"
          type="submit"
        >
          অর্ডার সম্পূর্ণ করুন
        </button>
      </form>
    </div>
  );
};

export default BillingDetailsCard;
