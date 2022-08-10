import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import search_image from "../public/search_img.png";

export default function Pageheading(props) {
  return (
    <div>
      <div>
        <h1 className=" border-t-4 border-b-4 text-violet-500 bg-yellow-500 text-8xl font-extrabold  border-violet-500 mt-1 px-3">
          <span>{props.title}</span>
          <Image src={search_image} alt="" height={100} width={100} />
        </h1>
      </div>
    </div>
  );
}
Pageheading.PropTypes = {
  title: PropTypes.string.isRequired,
};
