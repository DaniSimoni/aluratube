import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //backgroundColor: "gray"
  };
const [valorDoFiltro, setValorDoFiltro] = React.useState("");


  return (

    <>
    <CSSReset />
    <div style={estilosDaHomePage}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
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
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 20px;
    }
`;


const StyledBanner = styled.div`
    background-color: blue;
    height: 230px;
    background-image: url(${({bg}) => bg});
`
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />

      
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


function Timeline({searchValue, ...props}) {
  const playlistName = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistName.map((playlistName) => {
          const videos = props.playlists[playlistName]; 
       //   console.log(playlistName);
       //   console.log(videos);
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                 {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                  return (
                       <a key={video.url} href={video.url}>
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