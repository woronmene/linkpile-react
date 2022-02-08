import React from 'react';
import { Link } from 'react-router-dom';
import LinkCard from '../components/LinkCard';

export default function Page({
  imgSrc,
  profileName,
  about,
  links,
  appearance,
}) {
  const { background, linkStyle, font } = appearance;

  return (
    <div
      style={{
        background: 'center / cover no-repeat ' + background,
      }}
      className={`w-full h-full p-4 flex flex-col items-center ${font} space-y-2`}
    >
      {imgSrc && (
        <div className="w-24 h-24 flex justify-center">
          <img
            src={imgSrc}
            className="w-24 h-24 rounded-full object-cover"
            alt=""
          />
        </div>
      )}
      <h1 className="text-white text-lg font-bold">{profileName}</h1>
      <p className="text-white text-center text-base font-semibold">{about}</p>
      <div
        className={`p-4 w-full flex flex-col justify-center items-center space-y-4`}
      >
        {links
          ?.filter((link) => link.active !== false && link.title && link.link)
          .map((link) => {
            return (
              <LinkCard key={link.title} link={link} linkStyle={linkStyle} />
            );
          })}
      </div>
      <Link to={'/'} className="text-2xl font-bold font-Rammetto">
        Linkpile
      </Link>
    </div>
  );
}
