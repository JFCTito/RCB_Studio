import imageFox from '../../assets/foxHome.png';

const HomeView = () => {
  return (
    <div
      id="Home"
      className="h-screen-minus-header flex bg-[url(/Users/diegocruz/Desktop/RCB_Studio/src/assets/home_background_svg.svg)] bg-cover bg-center items-center justify-center text-white"
    >
      <img src={imageFox} />
    </div>
  );
};

export default HomeView;
