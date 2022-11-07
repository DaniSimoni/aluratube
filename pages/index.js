import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //backgroundColor: "gray"
  };


  return (

    <>
    <CSSReset />
    <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
    </div>
    </>
  );
}

export default HomePage

// function Menu() {
//  return (
//    <div>
//      Menu
//    </div>
//  )
//}

const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 20px;
    }
`;



function Header() {
  return (
    <StyledHeader>

      
      <section className="user-info">
          <img src={`https://github.com/${config.github}.png`}/>

        <div>  
          <h2>
            {config.name}
          </h2>
          
          <p>
          {config.job}
          </p>
        </div>

      </section>
    </StyledHeader>
  );
}


function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map(function(playlistsNames) {
          const videos = props.playlists[playlistsNames]; 
          console.log(playlistsNames);
          console.log(videos);
          return (
            <section>
              <h2>{playlistsNames}</h2>
              <div>
              {videos.map((video) => {
                  return (
                       <a href={video.url}>
                       <img src={video.thumb} />
                       <span>
                           {video.title}
                       </span>
              </a>
            )
          })}
              </div>
            </section>
          )

      })}
    </StyledTimeline>
  )
}