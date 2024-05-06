import { productList } from "../constant/productList.constant";
import "../App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductList() {
  const shopping_cart = document.querySelector(".shopping-cart");

  const handleAddToCart = (e) => {
    shopping_cart.classList.add("active");
    let product_count =
      Number(shopping_cart.getAttribute("data-product-count")) || 0;
    shopping_cart.setAttribute("data-product-count", product_count + 1);

    let target_parent = e.target.parentNode.parentNode.parentNode;
    target_parent.style.zIndex = "100";

    let img = target_parent.querySelector("img");
    let flying_img = img.cloneNode();
    flying_img.classList.add("flying-img");

    target_parent.appendChild(flying_img);

    const flying_img_pos = flying_img.getBoundingClientRect();
    const shopping_cart_pos = shopping_cart.getBoundingClientRect();

    let data = {
      left:
        shopping_cart_pos.left -
        (shopping_cart_pos.width / 2 +
          flying_img_pos.left +
          flying_img_pos.width / 2),
      top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30,
    };

    flying_img.style.cssText = `--left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;`;

    setTimeout(() => {
      target_parent.style.zIndex = "";
      target_parent.removeChild(flying_img);
      shopping_cart.classList.remove("active");
    }, 1000);
  };
  return (
    <>
      <section className="slider">
        {productList?.map((product) => {
          return (
            <div className="card">
              <div className="card-content">
                <img src={product?.imagUrl} alt="" className="card-img" />
                <h1 className="card-title">{product?.productName}</h1>
                <div className="card-body">
                  <p className="card-price">{product?.price}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success">Buy Now</button>
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-border add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="shopping-cart" data-product-count="0">
        <ShoppingCartIcon className="cart-icon" />
      </div>
    </>
  );
}

export default ProductList;
