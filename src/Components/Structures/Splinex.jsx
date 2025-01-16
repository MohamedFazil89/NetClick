import Spline from '@splinetool/react-spline';
import "../styles/Splinex.css"

export default function Home() {
  return (
    <div className="spline3D" style={{ 
      width: '50%',
      height: '150%', 
      overflow: 'hidden', 
      zIndex: 10,
      }}>
      <Spline
        scene="https://prod.spline.design/gPQfxC2dsdbeWgeb/scene.splinecode" 
      />
    </div>
  );
}
