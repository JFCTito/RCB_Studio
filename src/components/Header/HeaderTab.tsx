import type { HeaderTabProps } from '../../ts/interfaces/headerTabProps';

const HeaderTab = (headerTabProps: HeaderTabProps) => {
  return (
    <button
      onClick={() => headerTabProps.onClick(headerTabProps.id)}
      className={`relative text-sm font-semibold px-4 py-2 transition-colors duration-200
        border-b-2
        ${
          headerTabProps.isActive
            ? 'text-orange-600 border-orange-600'
            : 'text-gray-700 border-transparent'
        }
        hover:text-orange-600 hover:border-orange-600
      `}
    >
      {headerTabProps.title}
    </button>
  );
};

export default HeaderTab;
