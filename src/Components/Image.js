import React,{memo} from "react";

const Image = ({ url, title }) => (
    <li>
    <img src={url} alt={title} />
  </li>
);

export default memo(Image);
