import React from 'react'
import Sidebar from './Sidebar';
import Body from './Body';


 const Dashboard = () => {
  return (
    <main className="flex min-h-screen min-w-max bg-white lg:pb-24">
    <Sidebar />
    <Body  />
    {/* <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />

    <div className="fixed bottom-0 left-0 right-0 z-50">
      <Player accessToken={accessToken} trackUri={playingTrack.uri} />
    </div> */}
  </main>
  )
}
export default  Dashboard;
