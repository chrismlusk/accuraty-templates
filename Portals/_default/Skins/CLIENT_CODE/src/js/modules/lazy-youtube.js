function lazyLoadYouTube() {
  const videos = document.querySelectorAll('.lazy-yt');
  if (!videos) return;

  videos.forEach(video => {
    // build play button
    const btn = document.createElement('div');
    btn.className = 'lazy-yt-btn';
    video.appendChild(btn);

    // build thumbnail
    const img = document.createElement('img');
    img.className = 'lazy-yt-thumbnail';
    img.src = `https://img.youtube.com/vi/${video.dataset.id}/hqdefault.jpg`;
    video.appendChild(img);

    // build iframe
    video.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.className = 'lazy-yt-item';
      iframe.setAttribute(
        'src',
        `https://www.youtube.com/embed/${
          video.dataset.id
        }?rel=0&showinfo=0&autoplay=1`
      );
      iframe.setAttribute('allowfullscreen', '');
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      video.appendChild(iframe);
    });
  });
}

export default lazyLoadYouTube;
