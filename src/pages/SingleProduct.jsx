import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
// =================
// import prodcompare from '../images/prodcompare.svg'
// import wish from '../images/wish.svg'
// import wishlist from '../images/wishlist.svg'
// import watch from '../images/watch.jpg'
// // import watch2 from '../images/watch-1.jpg'
// import addcart from '../images/add-cart.svg'
// import view from '../images/view.svg'

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      {/* Main Product */}
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom py-3">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                      edit={false}
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        style={{ width: "65px" }}
                        min={1}
                        max={13}
                        className="form-control"
                        // disabled
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">ADD TO CART</button>
                      <button className="button signup">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders!
                      <br />
                      We ship all US domestic orders within <b>5-10 days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <p className="product-data">
                      <a
                        href="javascript:void(0);"
                        onClick={() => {
                          copyToClipboard(
                            "https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
                          );
                        }}
                      >
                        Copy Product link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Product Ends */}

      {/* Description */}
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  iste quas quidem cum sequi autem dolor deleniti odit, vel ad
                  aspernatur nostrum velit eius dolorem molestiae blanditiis
                  sint quia. Sint. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quae neque error iste beatae alias excepturi
                  voluptate voluptatum temporibus quis officia officiis facere,
                  quaerat, inventore facilis recusandae nisi ea eum! Quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description ENDS*/}

      {/* Reviews */}
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-3">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={true}
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">John</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi qui unde obcaecati, repellendus dolorem earum
                      eveniet recusandae! Qui facere, tempora provident odit
                      temporibus dolore minus esse iste, debitis mollitia quod!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews ENDS */}

      {/* Popular */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
      {/* Popular ENDS */}
    </>
  );
};

export default SingleProduct;


// 8:05:44