// export interface IBook {
//   title: string;
//   category: string;
//   cutting_price: string;
//   sale_price: string;
//   short_description: string;
//   full_description?: string;
//   images: [
//     front_img?: string,
//     img_2?: string,
//     img_3?: string,
//     img_4?: string,
//     img_5?: string
//   ];
//   sizes: [
//     size_1?: string,
//     size_2?: string,
//     size_3?: string,
//     size_4?: string,
//     size_5?: string,
//     size_6?: string
//   ];
//   _id?: string;
//   status?: string;
// }

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  image: string;
  user?: string;
  _id?: string;
  status?: string;
}

export interface IOrder {
  name: string;
  phone: string;
  address: string;
  productName: string;
  quantity: string;
  status: string;
  _id: string;
  remarks: string;
}
