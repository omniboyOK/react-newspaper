import React from "react";

const Noticia = ({ noticia }) => {
  const { url, title, section, subsection, multimedia, abstract } = noticia;
  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey darken-1">
        <div className="card-image">
          <img src="https://static01.nyt.com/images/2019/12/11/science/11CAVEART03/11CAVEART03-thumbStandard.jpg" alt={title} />
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
