import type { HeaderTabProps } from '../../ts/interfaces/headerTabProps';

const HeaderTab = (headerTabProps: HeaderTabProps) => {
  return (
    <button
      onClick={() => headerTabProps.onClick(headerTabProps.id)}
      className={`relative text-sm font-semibold px-4 py-2 transition-colors duration-200
        ${headerTabProps.isActive ? 'text-orange-600' : 'text-gray-700'}
        hover:text-orange-600 hover:cursor-pointer
      `}
    >
      {headerTabProps.isActive && (
        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 w-full h-3 bg-orange rounded-b-2xl'></div>
      )}
      {headerTabProps.title}
    </button>
  );
};

export default HeaderTab;
