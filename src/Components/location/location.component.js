import React, { PureComponent } from "react";
import Png from "../images/icons8-marker-96.png";
import { Data } from "../Data";
import "./styles.scss";
export default class LocationComp extends PureComponent {
  RenderSelectTag = () => {
    const { handleChange } = this.props;
    return (
      <select id="location" name="loc" onChange={handleChange}>
        <option value="" selected disabled>
          Select Location
        </option>
        {Data &&
          Data?.map((item, index) => (
            <option value={item.Location} key={index}>
              {item.Location}
            </option>
          ))}
      </select>
    );
  };
  render() {
    const { src, loc, address } = this.props;
    console.log(src);
    return (
      <main>
        <div className="title">
          <h1>Codilar address Locator </h1>
          <img src={Png} alt="png" />
        </div>
        <section>
          <aside>
            {src === "" ? (
              <>
                <p className="loading">
                  <div className="circle"></div>
                  <p className="selectLocation">Please Select The Location</p>
                </p>
              </>
            ) : (
              <iframe
                src={src}
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </aside>
          <aside className="Details">
            <section>
              <div className="addressDetails">
                <img src={Png} />
                <div className="locationSelection">
                  <label for="location">Select Location</label>
                  {this.RenderSelectTag()}
                </div>
              </div>
            </section>
            <section>
              {loc && address !== "" && (
                <div className="DetailsData">
                  <h5>Office Location Details</h5>
                  <article className="locationData">
                    <p>Place: {loc}</p>
                    <p>Address: {address}</p>
                  </article>
                </div>
              )}
            </section>
          </aside>
        </section>
      </main>
    );
  }
}
