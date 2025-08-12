import { useSelector } from "react-redux";
import { useTitle } from "../../hooks/useTitle";
import { CartList } from "./components/CartList";
import { EmptyCart } from "./components/EmptyCart";


export const Cart = () => {
	useTitle("Your Cart");
	const cartItems = useSelector((state) => state.cartState.cartList);

	return <main>{cartItems.length? <CartList/>: <EmptyCart/>}</main>;
};
