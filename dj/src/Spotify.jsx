function Spotify(){
    return(
        <div>
            <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius:"12px" }} 
                src="https://open.spotify.com/embed/track/6RSP2vMbVBMA9xYW29dpLk?utm_source=generator&theme=0&si=23680d122a334a98" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
            />
        </div>
    );
}

export default Spotify