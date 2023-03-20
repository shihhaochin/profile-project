import React from "react";
import homepageImg from "../img/aboutUs.png";

const homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        <h1>Hi,你好，我叫ＸＸＸ</h1>
        <h2>我是一名前端工程師</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          reiciendis placeat at voluptatum dicta magnam blanditiis beatae
          maiores eos corrupti, laboriosam unde fuga ex dolores ipsa minus
          pariatur labore consequuntur.
        </p>
        <button>了解更多</button>
      </div>
      <div className="homepage-right">
        <div className="homepageImg">
          <img src={homepageImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default homepage;
