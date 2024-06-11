import React, { useCallback, useState } from 'react';
import { ReactPlayerProps } from 'react-player';

export type VideoPlayer = Omit<ReactPlayerProps, 'url'> & {
  url: Required<ReactPlayerProps>['url'];
};

interface VideoContext {
  videoPlayers: Map<VideoPlayer['url'], ReactPlayerProps>;
  onAddVideoPlayer: (props: VideoPlayer) => void;
  onPauseAllVideoPlaying: () => void;
  onRemoveVideoPlayer: (name: VideoPlayer['url']) => void;
  getVideoPlayer: (name: VideoPlayer['url']) => ReactPlayerProps | undefined;
  setVideoPlayerProps: (name: VideoPlayer['url'], props: ReactPlayerProps) => void;
}

interface VideoContextProviderProps {
  api?: VideoContext;
  children: React.ReactNode;
}

export function createVideoContext() {
  const VideoContext = React.createContext<VideoContext>({
    videoPlayers: new Map<VideoPlayer['url'], ReactPlayerProps>(),
    onAddVideoPlayer: () => void 0,
    onPauseAllVideoPlaying: () => void 0,
    onRemoveVideoPlayer: () => void 0,
    getVideoPlayer: () => void 0,
    setVideoPlayerProps: () => void 0,
  });

  const VideoPlayerProvider = ({ children, api }: VideoContextProviderProps) => {
    const value = usePlayers();
    return <VideoContext.Provider value={api ?? value}>{children}</VideoContext.Provider>;
  };

  function useVideoContext() {
    const context = React.useContext(VideoContext);

    if (!context) {
      throw new Error('useVideoContext must be used within a FormContextProvider');
    }
    return context;
  }

  return [VideoPlayerProvider, useVideoContext, usePlayers] as const;
}

function usePlayers() {
  const [videoPlayers, setVideoPlayers] = useState<Map<VideoPlayer['url'], ReactPlayerProps>>(
    new Map(),
  );

  const onPauseAllVideoPlaying = useCallback(() => {
    Object.values(videoPlayers).forEach((player) => {
      if (player) {
        if (player.pauseVideo) player.pauseVideo();
        else player.pause();
      }
    });
  }, [videoPlayers]);

  const onAddVideoPlayer = useCallback((props: VideoPlayer) => {
    const foundPlayer = videoPlayers.has(props.url);

    if (foundPlayer) {
      console.error(`Video player with name ${props.url} already exists`);
    } else {
      setVideoPlayers((prev) => {
        const newVideoPlayers = new Map(prev);
        newVideoPlayers.set(props.url, props);
        return newVideoPlayers;
      });
    }
  }, []);

  const onRemoveVideoPlayer = useCallback((name: VideoPlayer['url']) => {
    const videoPlayer = videoPlayers.get(name);
    if (!videoPlayer) {
      console.error(`Video player with name ${name} not found`);
    } else {
      setVideoPlayers((prev) => {
        const newVideoPlayers = new Map(prev);
        newVideoPlayers.delete(name);
        return newVideoPlayers;
      });
    }
  }, []);

  const getVideoPlayer = useCallback(
    (name: VideoPlayer['url']) => {
      return videoPlayers.get(name);
    },
    [videoPlayers],
  );

  const setVideoPlayerProps = useCallback((name: VideoPlayer['url'], props: ReactPlayerProps) => {
    setVideoPlayers((prev) => {
      const newVideoPlayers = new Map(prev);
      newVideoPlayers.set(name, {
        ...prev.get(name),
        ...props,
      });

      return newVideoPlayers;
    });
  }, []);

  return {
    videoPlayers,
    onAddVideoPlayer,
    onPauseAllVideoPlaying,
    onRemoveVideoPlayer,
    getVideoPlayer,
    setVideoPlayerProps,
  };
}
