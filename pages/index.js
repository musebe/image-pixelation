import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { pixelate } from "@cloudinary/url-gen/actions/effect";
import {useRef} from "react"


const Home = () => {

  const captionRef = useRef();

  const sample = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const original = sample.image('docs/models');
  const pixelated = sample.image('docs/models');

  pixelated.effect(pixelate(10))

  original.resize(fill().width(300).height(300));
  pixelated.resize(fill().width(300).height(300));

 
  return (
    <div className="container">
      <h1>Pixellating Images using Nextjs and Cloudinary</h1>
      <div className="row">
        <div className="column">
          <AdvancedImage className="image" cldImg={original} type="fetch" />
        </div>
        <div className="column">
          <AdvancedImage ref={captionRef} className="image" cldImg={pixelated} type="fetch" /> <br />
        </div>
      </div>
    </div>
  )

}
export default Home;