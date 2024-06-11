import VideoPlayer from '~/components/VideoPlayer';
import { VideoPlayerProvider, useVideoContext } from '~/context/Video';

const vimeoId = 'https://vimeo.com/76979871';
const youtubeId = 'https://youtu.be/9bZkp7q19f0';

function AnotherComponent() {
  const { setVideoPlayerProps, getVideoPlayer } = useVideoContext();
  const onPauseVimeo = () => {
    const currentProps = getVideoPlayer(vimeoId);
    setVideoPlayerProps(vimeoId, { playing: !currentProps?.playing });
  };

  const onPauseYoutube = () => {
    const currentProps = getVideoPlayer(youtubeId);
    setVideoPlayerProps(youtubeId, { playing: !currentProps?.playing });
  };

  return (
    <>
      <h1>AnotherComponent</h1>
      <button onClick={onPauseVimeo}>Play/Pause Vimeo</button>
      <button onClick={onPauseYoutube}>Play/Pause Youtube</button>
      <VideoPlayer url={youtubeId} controls />
    </>
  );
}

export function Video() {
  return (
    <VideoPlayerProvider>
      <VideoPlayer url={vimeoId} controls />
      <AnotherComponent />
    </VideoPlayerProvider>
  );
}
