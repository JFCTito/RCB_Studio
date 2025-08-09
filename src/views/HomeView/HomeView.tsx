import imageFox from '../../assets/foxHome.png';

const HomeView = () => {
  return (
    <div
      id='Home'
      className='h-screen-minus-header flex bg-[url(../src/assets/home_background_svg.svg)]  bg-cover bg-center items-center justify-center text-white'
    >
      {/* Main content */}
      <div className='flex items-center justify-around w-full gap-12 px-24'>
        {/* Left side - Text and button */}
        <div className='flex-1 flex flex-col items-center max-w-130'>
          <h1 className='text-4xl font-bold text-white leading-tight mb-8 text-center'>
            Pensar fuera de la caja <span className='text-cyan-300'>siempre ayuda</span>,{' '}
            <em>pero a veces</em> las mejores ideas{' '}
            <span className='text-cyan-300'>comienzan con una</span>.
          </h1>

          <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg'>
            Conócenos
          </button>
        </div>

        {/* Right side - Fox character */}
        <div className='flex-1 flex justify-center'>
          <img src={imageFox} alt='RCB Studio Fox' className='w-150 h-auto object-contain' />
        </div>
      </div>

      {/* Dotted line at bottom */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white opacity-20'>
        <div className='flex justify-center space-x-1'>
          {[...Array(20)].map((_, i) => (
            <div key={i} className='w-1 h-1 bg-white rounded-full'></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
