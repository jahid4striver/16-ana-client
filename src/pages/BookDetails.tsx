// import auth from '@/auth/firebase.config';
// import AddReviews from '@/components/AddReviews';
import BookDetailsCard from '@/components/BookDetailsCard';
import Loader from '@/components/ui/Loader';
// import Footer from '@/layout/Footer';
import { useGetSingleBookQuery } from '@/redux/features/books/bookApi';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    // const [user] = useAuthState(auth);
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);

    if (isLoading) {
        return <Loader/>
    }
    console.log(data);
    return (
        <div>
            {/* data={data} */}
            <BookDetailsCard data={data} />
            {/* {user?.email && <AddReviews />} */}
            {/* <Footer/> */}
        </div>
    );
};

export default BookDetails;