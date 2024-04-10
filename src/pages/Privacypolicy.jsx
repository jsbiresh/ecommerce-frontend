import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Privacypolicy = () => {
  return (
    <>
      <Meta title="Policy Page" />
      <BreadCrumb title="Policy Page" />
      
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Privacypolicy;
