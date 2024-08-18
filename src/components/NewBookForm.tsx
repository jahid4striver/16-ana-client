// import { IBook } from "@/interfaces/bookInterface";
import { usePostBookMutation } from "@/redux/features/books/bookApi";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const NewBookForm = () => {
  const [postBook, { isError, isSuccess }] = usePostBookMutation();

  // For Solving Duplicate Toast on success and error
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

  function handleAddBook(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form?.elements.namedItem("title") as HTMLInputElement;
    const title = titleInput?.value;
    const category = form?.category?.value;
    const cutting_price = form?.cutting_price?.value;
    const sale_price = form?.sale_price?.value;
    const sale_unit = form?.sale_unit?.value;
    const short_description = form?.short_description?.value;
    const full_description = form?.full_description?.value;
    const front_img = form?.front_img?.value;
    const img_2 = form?.img_2?.value;
    const img_3 = form?.img_3?.value;
    const img_4 = form?.img_4?.value;
    const img_5 = form?.img_5?.value;
    const size_1 = form?.size_1?.value;
    const size_2 = form?.size_2?.value;
    const size_3 = form?.size_3?.value;
    const size_4 = form?.size_4?.value;
    const size_5 = form?.size_5?.value;
    const size_6 = form.size_6?.value;

    const bookData: any = {
      title,
      category,
      cutting_price,
      sale_price,
      sale_unit,
      short_description,
      full_description,
      images: [
        { name: "front_img", link: front_img },
        { name: "img_2", link: img_2 },
        { name: "img_3", link: img_3 },
        { name: "img_4", link: img_4 },
        { name: "img_5", link: img_5 },
      ],
      sizes: [
        { name: "size_1", size: size_1 },
        { name: "size_2", size: size_2 },
        { name: "size_3", size: size_3 },
        { name: "size_4", size: size_4 },
        { name: "size_5", size: size_5 },
        { name: "size_6", size: size_6 },
      ],
    };
    postBook(bookData);
    form.reset();
  }

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Product Added Successful");
      setShowSuccessToast(false);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("Product Added Failed");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);

  return (
    <div>
      <form onSubmit={handleAddBook} className="mt-4 grid grid-cols-3">
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Type Product Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            name="category"
            type="text"
            placeholder="Type Product Category"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Cutting Price</span>
          </label>
          <input
            name="cutting_price"
            type="text"
            placeholder="Type Product Cutting Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Sale Price</span>
          </label>
          <input
            name="sale_price"
            type="text"
            placeholder="Type Product Sale Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Sale Unit</span>
          </label>
          <input
            name="sale_unit"
            type="text"
            placeholder="Type Product Unit Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            name="short_description"
            type="text"
            placeholder="Type Product Short Description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Full Description</span>
          </label>
          <input
            name="full_description"
            type="text"
            placeholder="Type Product Full Description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Front Image Link</span>
          </label>
          <input
            name="front_img"
            type="text"
            placeholder="Front Image Link"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link 2</span>
          </label>
          <input
            name="img_2"
            type="text"
            placeholder="Enter Image 2 Link Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link 3</span>
          </label>
          <input
            name="img_3"
            type="text"
            placeholder="Enter Image 3 Link Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link 4</span>
          </label>
          <input
            name="img_4"
            type="text"
            placeholder="Enter Image 4 Link Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link 5</span>
          </label>
          <input
            name="img_5"
            type="text"
            placeholder="Enter Image 5 Link Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 1</span>
          </label>
          <input
            name="size_1"
            type="text"
            placeholder="Enter Size 1 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 2</span>
          </label>
          <input
            name="size_2"
            type="text"
            placeholder="Enter Size 2 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 3</span>
          </label>
          <input
            name="size_3"
            type="text"
            placeholder="Enter Size 3 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 4</span>
          </label>
          <input
            name="size_4"
            type="text"
            placeholder="Enter Size 4 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 5</span>
          </label>
          <input
            name="size_5"
            type="text"
            placeholder="Enter Size 5 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Size 6</span>
          </label>
          <input
            name="size_6"
            type="text"
            placeholder="Enter Size 6 Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button
          className="btn btn-md btn-error text-white my-4 rounded-md"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewBookForm;
