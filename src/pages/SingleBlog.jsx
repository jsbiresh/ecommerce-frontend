import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog1 from '../images/blog-1.jpg'
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-5" /> &nbsp; Go Back to
                  Blogs{" "}
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog1}
                  alt="blog"
                  className="img-fluid w-50 my-4"
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  quo quibusdam quisquam natus impedit odit fugiat sequi quia
                  voluptatem fuga voluptate nisi sunt odio, fugit dignissimos
                  corrupti, aperiam qui deleniti. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veniam blanditiis cumque
                  aliquid, dolores distinctio fugiat ad possimus, soluta illum
                  minus nihil at numquam unde! Odit molestias dicta quae ab
                  inventore.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
