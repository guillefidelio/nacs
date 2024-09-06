import React from 'react';

export function PromoVideo() {
  return (
    <video
      src="/promo-video.mp4"
      poster="/video-thumbnail.jpg"
      controls
      width="100%"
    >
      Tu navegador no soporta el elemento de video.
    </video>
  );
}