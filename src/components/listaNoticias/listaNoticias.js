import React from 'react';
import Noticia from '../noticia/noticia';

const listaNoticias = ({noticias}) => (
    <div className="row">
        {noticias.map(noticia => {
            return <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        })}
    </div>
)

export default listaNoticias;