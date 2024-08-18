import { usePostSliderImageMutation } from "@/redux/features/books/bookApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const NewSliderForm: React.FC = () => {
  //   const [id2, setId2] = useState<string>("");

  const [postSliderImage, { isError, isSuccess }] =
    usePostSliderImageMutation();

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

  //   function guardarArchivo2(e: React.ChangeEvent<HTMLInputElement>) {
  //     const files = e.target.files;
  //     if (files && files.length > 0) {
  //       const file = files[0];
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = function () {
  //         // Remove the unused 'e' parameter
  //         const rawLog = reader.result?.toString().split(",")[1];
  //         if (rawLog) {
  //           const dataSend = {
  //             dataReq: { data: rawLog, name: file.name, type: file.type },
  //             fname: "uploadFilesToGoogleDrive",
  //           };
  //           fetch(
  //             "https://script.google.com/macros/s/AKfycbwYKgy85mYgpiT7U3mV2T6vum0yKg_I-AAJegLuNfeosEO_HligOW_ic_M1mW8pUqk/exec",
  //             { method: "POST", body: JSON.stringify(dataSend) }
  //           )
  //             .then((res) => res.json())
  //             .then((a) => {
  //               if (a.id) {
  //                 toast.success("Image Uploaded");
  //                 setId2(a.id);
  //               }
  //             })
  //             .catch((e) => console.log(e));
  //         }
  //       };
  //     }
  //   }

  const handleAddSliderImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form?.elements.namedItem("title") as HTMLInputElement;
    const title = titleInput?.value;
    const description = (e.target as HTMLFormElement)["description"].value; // Type assertion here
    const link = (e.target as HTMLFormElement)["link"].value; // Type assertion here
    const mainCategory = "books";
    // const img = `https://docs.google.com/uc?export=download&id=${id2}`;

    const imageData = { title, img: link, description, mainCategory };
    postSliderImage(imageData);
    form.reset();
  };

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Image Added Successful");
      setShowSuccessToast(false);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("Image Added Failed");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);

  return (
    <div>
      <h1 className="text-3xl border-b-4 border-accent mt-28 inline-block">
        Add A New Slider Image
      </h1>
      <form
        onSubmit={handleAddSliderImage}
        className="mt-8 flex justify-center items-center flex-col"
      >
        {/* <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Slider Image File</span>
          </label>
          <input
            type="file"
            id="customFile"
            placeholder="Image File"
            onChange={(e) => guardarArchivo2(e)}
          />
        </div> */}
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            name="link"
            type="text"
            placeholder="Image Link"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Image Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Image Description"
          ></textarea>
        </div>
        <button
        //   disabled={!id2}
          className="btn btn-md btn-accent text-white my-4 rounded-md"
          type="submit"
        >
          Add Slider Image
        </button>
      </form>
    </div>
  );
};

export default NewSliderForm;
