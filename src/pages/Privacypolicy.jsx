import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Privacypolicy = () => {
  return (
    
    <>    
      <Meta title="Policy Page" />
      <BreadCrumb title="Policy Page" />
          <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        <div>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Privacypolicy