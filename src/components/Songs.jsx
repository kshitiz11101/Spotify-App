export const Songs = ({songs})=>{
    return (<>{songs.map((song, index)=><div key={index}>
        <img src= {song.artworkUrl100} alt="img"/>
        {song.trackName}
        <audio controls>
            <source src={song.previewUrl} type="audio/mp4"></source>
        </audio>
        </div>)}
    </>
    )
}