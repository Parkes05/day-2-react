import './App.css'

export default function App() {
  const titleText = "Enjoy on your TV";
  const titleText_1 = "Download your shows to watch offline"
  const text1= "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  const text2= "Save your favorites easily and always have something to watch."
  const text3= "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  const text4= "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
  const image1 = {
    source: "/download.jpg",
    alt: "img"
  }
  const image2 = {
    source: "/logo192.png",
    alt: "logo"
  }
  const image3 = {
    source: "",
    alt: "img"
  }
  const image4 = {
    source: "",
    alt: "new image"
  }

  return (
    <>
      <nav>nav</nav>
      <div className="card">
        <CardContainer title={titleText} text={text1} image={image1} theClassName="paragraph_1" />
        <CardContainer title={titleText_1} text={text2} image={image2} />
        <CardContainer title="Watch everywhere" text={text3} image={image3} />
        <CardContainer title="Create profiles for kids" text={text4} image={image4} />
        <CardContainer />
        <CardContainer theClassName='paragraph_8'/>
      </div>
      <footer>footer</footer>
    </>
  )
}

function CardContainer({ title="initial_title", text="initial_text", image={source:"", alt:""}, theClassName="" }) {
  return (
    <div className="cardText">
      <h1 id="title">{title}</h1>
      <p className={theClassName}>{text}</p>
      <img src={image.source} alt={image.alt} width="50" />
    </div>
  )
}
