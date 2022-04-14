type GifProps = {
    title : string
    url : string
}

function Gif(props: GifProps) {
  return (
    <>
      <div className="img">
                <img src={props.url}  alt={props.title}></img>
                <h4>{props.title}</h4>
            </div>
    </>
  );
}

export default Gif;
