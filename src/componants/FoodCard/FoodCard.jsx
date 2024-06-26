import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  // console.log("auth", useAuth);

  const { user } = useContext(AuthContext);
  // console.log(user, user?.email);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  console.log(cart);

  const handleAddToCart = ({ item }) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        // menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added on the cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });

      // fetch("http://localhost:5000/carts", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(cartItem),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.insertedId) {
      //       Swal.fire({
      //         position: "top-end",
      //         icon: "success",
      //         title: "Food added on the cart.",
      //         showConfirmButton: false,
      //         timer: 1500,
      //       });
      //     }
      //   });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100 mt-4 btn-neutral"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
