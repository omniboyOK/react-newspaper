import React from "react";

const Noticia = ({ noticia }) => {
  const { url, title, section, subsection, multimedia, abstract } = noticia;
  console.log(multimedia)
  let image = multimedia.length > 0 ? multimedia[3].url : "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png";
  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey darken-1">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>

        <div className="card-content white-text">
          <p>
            {section} > {subsection}
          </p>
          <span className="card-title">{title}</span>
          <p>{abstract}</p>
          <div className="card-action center">
              <a className="waves-effect waves-light btn" href={url}>Ver noticia</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
