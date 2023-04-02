import { FC } from "react";

const About : FC<any> = ({data}) => {
  const { skills, image, contentHtml, blurredImage } = data;
  return <div id="about" className="flex flex-wrap">
    <div>
      {contentHtml}
    </div>
  </div>
}

export default About;