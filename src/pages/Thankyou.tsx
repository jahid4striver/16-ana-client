import { Link } from "react-router-dom";

const Thankyou = () => {
    return (
        <div className="">
            <div className="h-screen flex flex-col justify-center items-center">
                <h3>সন্মানিত গ্রাহক,</h3>
                <h3>Express Mart এ অর্ডার করার জন্য আপনাকে</h3>
                <h1 className="text-3xl text-error">ধন্যবাদ</h1>
                <Link to="/" className="btn btn-sm btn-error text-white mt-8">Get More Products</Link>
            </div>
        </div>
    );
};

export default Thankyou;