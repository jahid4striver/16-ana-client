import { MdOutlineDeleteSweep } from "react-icons/md";

const SliderImageCard = ({ images }: any) => {
  console.log(images);
  
  return (
    <>
      <div className="text-center my-8"></div>
      <div className="overflow-x-auto mb-8">
        <table className="table text-center">
          <thead>
            <tr>
              <th>SL#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {images?.map((img: any, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                {/* <figure className="px-2 pt-2 cursor-pointer">
                        <img src={img.img} alt={img.title} className="rounded-xl  w-28" />
                    </figure> */}
                  <img className="h-40 w-40" src={img?.img} alt="" />
                </td>
                <td>{img?.title}</td>
                <td>{img?.description}</td>
                <td>
                  <MdOutlineDeleteSweep className="text-2xl text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SliderImageCard;
