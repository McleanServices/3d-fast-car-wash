import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      
      <div style={{width:"250px", height:"auto"} } >
      <img src="public/loading.gif" alt=""   />
      </div>
      
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Cleaning your car <br />
        
      </p>
    </Html>
  );
};

export default CanvasLoader;
//<span className='canvas-loader'></span>