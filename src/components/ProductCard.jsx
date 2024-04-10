import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
// ============================================
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import watch from '../images/watch.jpg'
// import watch2 from '../images/watch-1.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  // console.log(location);

  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} alt="product" />
            <img src={watch} alt="watch" />
          </div>
          <div className="product-details">
            <h5 className="brand">Havels</h5>
            <h6 className="product-title">
              Kids headphones build 10 pack multi colored for students
            </h6>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4}
              edit={false}
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none' }`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              saepe nostrum.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button to='/' className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button to='/' className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button to='/' className="border-0 bg-transparent">
                <img src={addcart} alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  );
};
// 2:45:00
export default ProductCard;
