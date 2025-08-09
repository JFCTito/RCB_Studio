import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import imageFox from '../../assets/foxHome.png';

const ServicesView = () => {
  // Mock images for each service - you can replace these with actual images
  const brandingImages = [imageFox, imageFox, imageFox, imageFox, imageFox, imageFox];

  const socialMediaImages = [imageFox, imageFox, imageFox, imageFox, imageFox, imageFox];

  const art3DImages = [imageFox, imageFox, imageFox, imageFox, imageFox, imageFox];

  return (
    <div id='Services' className='h-screen-minus-header flex'>
      {/* Left Section - Text Content */}
      <div className='flex-1 bg-gray-100 flex items-center justify-center relative overflow-hidden'>
        <div className='max-w-lg px-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Bienvenido a RCB Studio</h1>
          <h2 className='text-2xl font-semibold text-gray-700 mb-6'>
            Creamos experiencias al alcance de todos
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            En RCB studio creemos que cualquier negocio tiene el potencial de despegar y crecer de
            manera exponencial, nuestro modelo de trabajo se basa en colaborar codo a codo con tu
            negocio, estableciendo retos y midiendo crecimiento.
          </p>
        </div>
      </div>

      {/* Right Section - Service Cards */}
      <div className='flex-1 flex items-center justify-center relative'>
        {/* Dark base positioned lower with rounded left corners */}
        <div className='absolute bottom-0 left-0 right-0 h-3/4 bg-gray-900 rounded-tl-3xl'></div>

        {/* Cards container */}
        <div className='relative z-10 grid grid-cols-3 gap-6 w-full max-w-4xl p-8'>
          {/* Card 1: Branding */}
          <div className='bg-white rounded-t-2xl overflow-hidden shadow-lg'>
            <div className='h-48'>
              <ImageCarousel images={brandingImages} className='h-full' interval={4000} />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>Branding</h3>
            </div>
          </div>

          {/* Card 2: Social media MKT */}
          <div className='bg-white rounded-t-2xl overflow-hidden shadow-lg'>
            <div className='h-48'>
              <ImageCarousel images={socialMediaImages} className='h-full' interval={4000} />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>Social media MKT</h3>
            </div>
          </div>

          {/* Card 3: Arte 3D */}
          <div className='bg-white rounded-t-2xl overflow-hidden shadow-lg'>
            <div className='h-48'>
              <ImageCarousel images={art3DImages} className='h-full' interval={4000} />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>Arte 3D</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
