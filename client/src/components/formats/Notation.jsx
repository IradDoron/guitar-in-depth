import Vex from 'vexflow';
const VF = Vex.Flow;
function Notation({ notes }) {
  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  return (
    <>
      <div>{renderer}</div>
    </>
  );
}

export default Notation;
