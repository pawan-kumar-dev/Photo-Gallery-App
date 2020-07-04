import React, { createContext, useState ,memo} from "react";
import { apiKey } from "./AppKey";
export const PhotoContext = createContext();

const PhotoProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runQuery = query => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then((response)=>{
        response.json().then((result)=>{
            setImages(result.photos.photo)
            setLoading(false)
        })
        })
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runQuery }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default memo(PhotoProvider);
