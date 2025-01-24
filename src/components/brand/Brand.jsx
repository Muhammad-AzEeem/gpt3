import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

function Brand() {
  // == step 11 from line8 to 24..

  return (
    <div className="gpt3__brand section__padding ">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  );
}

export default Brand;

// == step 12 in brand.css..
