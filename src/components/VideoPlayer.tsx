import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useVideoContext } from '~/context/Video';
import { VideoPlayer as VideoPlayerProps } from '~/context/Video/context';

export default function VideoPlayer(props: VideoPlayerProps) {
  const { onAddVideoPlayer, onRemoveVideoPlayer, getVideoPlayer } = useVideoContext();

  useEffect(() => {
    onAddVideoPlayer(props);
    return () => {
      onRemoveVideoPlayer(props.url);
    };
  }, []);

  const currentProps = getVideoPlayer(props.url);

  return <ReactPlayer {...currentProps} />;
}
