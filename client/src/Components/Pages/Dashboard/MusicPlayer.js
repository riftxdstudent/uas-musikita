import SpotifyPlayer from 'react-spotify-web-playback'

export default function MusicPlayer({ accessToken, trackUri }) {
	if(!accessToken) return null
	
	return (
		<SpotifyPlayer
			token={accessToken}
			showSaveIcon
			uris={trackUri ? [trackUri] : []}
		/>
	)
}