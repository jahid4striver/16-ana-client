// import auth from "@/auth/firebase.config";
import Loader from "@/components/ui/Loader";
import OrderListCard from "@/components/ui/OrderListCard";
// import WishListCard from "@/components/ui/WishListCard";
// import { IBook } from "@/interfaces/bookInterface";
import { useGetOrderlistQuery } from "@/redux/features/books/bookApi";
// import { useAuthState } from "react-firebase-hooks/auth";

const OrdersList = () => {
  //   const [user] = useAuthState(auth);
  const { data, isLoading } = useGetOrderlistQuery(undefined);
  //   const orderlist = data?.data.filter((wl: IBook) => wl.user === user?.email);
console.log(data);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-xl text-center my-4">My Orders</h1>
      <OrderListCard orders={data?.data} />
    </div>
  );
};

export default OrdersList;
