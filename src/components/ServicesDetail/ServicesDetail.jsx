import React from "react";
import "./ServicesDetail.css";
import { useParams } from "react-router-dom";
import { service_Detail_data } from "./ServicesDetails";
function ServicesDetail() {
  const { id } = useParams();
  const service = service_Detail_data[id];
  console.log(id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <div className="header_image">
        <img
          src="https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative_123827-23424.jpg?t=st=1719307284~exp=1719310884~hmac=cef8091b951eedd9c9667cc319cafef5b8be86ee3639490c8d45d4427b5e3f8a&w=740"
          alt=""
        />
        <h1 className="heading_title">Our Services</h1>
      </div>
      {service_Detail_data.map((data, index) => (
        <div
          key={index}
          className={`blog-post ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="image_cotainer">
            <img
              src={data.img}
              alt="blog_img"
              className={`blog-img ${index % 2 === 0 ? "even" : "odd"}`}
            />
          </div>

          <div
            className={`detail_container ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <h2 className={`post-title ${index % 2 === 0 ? "even" : "odd"}`}>
              {data.name}
            </h2>
            <div
              className={`post-description ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <ul>
                {data.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default ServicesDetail;
