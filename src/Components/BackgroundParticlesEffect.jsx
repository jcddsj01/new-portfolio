// BackgroundParticlesEffect: radial gradient effect at top-left and bottom-right
function BackgroundParticlesEffect() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70 bg-[radial-gradient(circle_at_10%_20%,#f86725_0%,transparent_20%),radial-gradient(circle_at_90%_80%,#91350b_0%,transparent_20%)] bg-black"
    ></div>
  );
}

export default BackgroundParticlesEffect;
