import { IOrder } from "@/interfaces/bookInterface";
import { useEffect, useState } from "react";
import UpdateOrderModal from "./UpdateOrderModal";
import { MdOutlineDeleteSweep } from "react-icons/md";

const OrderListCard = ({ orders }: any) => {
  const [updateOrderList, setUpdateOrderList] = useState<IOrder | null>(null);
  const [myOrderList, setMyOrderList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    if (currentStatus === "Confirmed") {
      const filtered = orders?.filter(
        (ol: IOrder) => ol.status === "Confirmed"
      );
      setMyOrderList(filtered);
    } else if (currentStatus === "Not Received") {
      const filtered = orders?.filter(
        (ol: IOrder) => ol.status === "Not Received"
      );
      setMyOrderList(filtered);
    } else if (currentStatus === "Canceled") {
      const filtered = orders?.filter((ol: IOrder) => ol.status === "Canceled");
      setMyOrderList(filtered);
    } else if (currentStatus === "Completed") {
      const filtered = orders?.filter(
        (ol: IOrder) => ol.status === "Completed"
      );
      setMyOrderList(filtered);
    } else if (currentStatus === "No Action") {
      const filtered = orders?.filter(
        (ol: IOrder) => ol.status === "No Action" || !ol.status
      );
      setMyOrderList(filtered);
    } else if (currentStatus === "All") {
      setMyOrderList(orders);
    } else if (currentStatus === "") {
      setMyOrderList(orders);
    }
  }, [currentStatus, orders]);

  return (
    <>
      <div className="text-center my-8">
        <div className="btn-group">
          <input
            onClick={() => setCurrentStatus("All")}
            type="radio"
            name="options"
            data-title="All"
            className="btn btn-sm btn-warning"
          />
          <input
            onClick={() => setCurrentStatus("No Action")}
            type="radio"
            name="options"
            data-title="No Action"
            className="btn btn-sm btn-warning ml-px"
          />
          <input
            onClick={() => setCurrentStatus("Confirmed")}
            type="radio"
            name="options"
            data-title="Confirmed"
            className="btn btn-sm btn-warning ml-px"
          />
          <input
            onClick={() => setCurrentStatus("Not Received")}
            type="radio"
            name="options"
            data-title="Not Received"
            className="btn btn-sm btn-warning ml-px"
          />
          <input
            onClick={() => setCurrentStatus("Canceled")}
            type="radio"
            name="options"
            data-title="Canceled"
            className="btn btn-sm btn-warning ml-px"
          />
          <input
            onClick={() => setCurrentStatus("Completed")}
            type="radio"
            name="options"
            data-title="Completed"
            className="btn btn-sm btn-warning ml-px"
          />
        </div>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="table text-center">
          <thead>
            <tr>
              <th>SL#</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Product Name</th>
              <th>Product Size</th>
              <th>Order Quantity</th>
              <th>Amount</th>
              <th>Remarks</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrderList?.map((order: any, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{order?.name}</td>
                <td>{order?.address}</td>
                <td className="text-center">{order?.phone}</td>
                <td>{order?.productName}</td>
                <td>{order?.size}</td>
                <td>{order?.quantity}</td>
                <td>{order?.totalPrice}</td>
                <td>{order?.remarks}</td>
                <td>
                  {order?.status ? (
                    <button
                      className={`btn btn-xs capitalize text-white ${
                        order?.status === "Confirmed"
                          ? "btn-success"
                          : order?.status === "Not Received"
                          ? "btn-warning"
                          : order?.status === "Canceled"
                          ? "btn-error"
                          : "btn-accent"
                      }`}
                    >
                      {order?.status}
                    </button>
                  ) : (
                    <button className="btn btn-xs btn-secondary text-white capitalize">
                      No Action
                    </button>
                  )}
                  <br />
                  <label
                    onClick={() => setUpdateOrderList(order)}
                    htmlFor="my_modal_6"
                    className="btn btn-xs btn-primary capitalize text-white mt-2"
                  >
                    Change
                  </label>
                </td>
                <td>
                  <MdOutlineDeleteSweep className="text-2xl text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {updateOrderList && (
          <UpdateOrderModal
            setUpdateOrderList={setUpdateOrderList}
            updateOrderList={updateOrderList}
          ></UpdateOrderModal>
        )}
      </div>
    </>
  );
};

export default OrderListCard;
