import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="product" />
          <img src="images/tv.jpg" alt="watch" />
        </div>
        <div className="product-details">
          <h5 className="brand">Havels</h5>
          <h6 className="product-title">
            Kids headphones buld 10 pack multi colored for students
          </h6>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={4}
            edit={false}
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="addCart" />
            </Link>
          </div>
        </div>
      </Link>
      {/*  */}
    </div>
  );
};
// 2:45:00
export default ProductCard;