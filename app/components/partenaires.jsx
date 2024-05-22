import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { fetchPartnersFromCMS } from "../utils/cms"; // Import the function to fetch data

const Hero1 = ({ galleryItems }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    console.log("Selected category:", filter);
    setActiveFilter(filter);
  };

  return (
    <section
      className="works section-padding"
      data-scroll-index="2"
      id="partenaires"
    >
      <div className="">
        <div className="row">
          <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <h4>
              <span>Nos</span> partenaires
            </h4>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="filtering text-center mb-30 col-sm-12">
            <div className="filter">
              <span
                key="All"
                onClick={() => handleFilterClick("All")}
                className={activeFilter === "All" ? "active" : ""}
              >
                All
              </span>
              {/* Other filter spans */}
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems
              .filter((item) => {
                if (activeFilter === "All") return true;
                return (
                  item.categorie1 === activeFilter ||
                  item.categorie2 === activeFilter ||
                  item.categorie3 === activeFilter
                );
              })
              .map(({ _id, link, image1, image2 }) => (
                <div key={_id} className="item-img">
                  <img src={image1} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <img src={image2} alt="image" />
                      <p></p>
                      <a href={link} className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // Fetch data from CMS
  const galleryItems = await fetchPartnersFromCMS();

  return {
    props: {
      galleryItems,
    },
  };
}

export default Hero1;
