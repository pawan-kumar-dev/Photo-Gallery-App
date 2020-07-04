import React, { useContext, useEffect,memo } from "react";
import { PhotoContext } from "./Provider";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images,loading,runQuery } = useContext(PhotoContext);
  useEffect(() => {
    runQuery(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default memo(Container);
