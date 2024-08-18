import { IOrder } from "@/interfaces/bookInterface";
import { useUpdateOrderlistMutation } from "@/redux/features/books/bookApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface UpdateModalProps {
  setUpdateOrderList: React.Dispatch<React.SetStateAction<IOrder | null>>;
  updateOrderList: IOrder;
}

const UpdateOrderModal: React.FC<UpdateModalProps> = ({
  setUpdateOrderList,
  updateOrderList,
}) => {
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [updateOrderlist, { isSuccess, isError }] =
    useUpdateOrderlistMutation();
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

  const handleUpdateStatusForBook = (mybook: IOrder) => {
    const data = { status: status, remarks: remarks };
    updateOrderlist({ id: mybook._id, data: data });
    setUpdateOrderList(null);
  };

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Status Updated");
      setShowSuccessToast(false);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("Status Update Failed");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col g-2">
          <span className="text-right ml-32">
            <button
              onClick={() => setUpdateOrderList(null)}
              className="btn btn-xs btn-error text-white"
            >
              X
            </button>
          </span>
          <h3 className="text-md font-bold">
            Change Status of: {updateOrderList?.name}
          </h3>
          <div className="form-control w-40  max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Select Status</span>
            </label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs"
              required
            >
              <option disabled selected>
                Select Status
              </option>
              <option value="Confirmed">Confirmed</option>
              <option value="Not Received">Not Received</option>
              <option value="Canceled">Canceled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="form-control w-40  max-w-xs mx-auto">
            <div className="label">
              <span className="label-text">Remarks</span>
            </div>
            <textarea
              onChange={(e) => setRemarks(e.target.value)}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <label
            onClick={() => handleUpdateStatusForBook(updateOrderList)}
            htmlFor="my_modal_6"
            className="btn btn-sm btn-error text-white w-28 mt-2 mx-auto"
          >
            Change
          </label>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderModal;
