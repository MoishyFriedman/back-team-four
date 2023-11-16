interface UserInterface {
  email: string;
  password: string;
}

interface IProduct {
  product_name: string;
  product_image_url: string;
  description: string;
  category_id: string;
  price: number;
  stock_quantity: number;
  view: number;
}

interface ICategory {
  category_name: string;
  view: number;
}

interface ICart {
  user_id: string;
  products_id: string[];
}
export { UserInterface, IProduct, ICategory, ICart };
