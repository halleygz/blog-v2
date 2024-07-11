import React from 'react';

const Buttons = ({ content, bgcolor, isLoading }) => {
  
  const load = toString(isLoading)

  return (
    <button
      className={`h-12 w-[167.7px] text-2xl text-[#2f3645] font-normal rounded-none ${!load ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        backgroundColor: bgcolor,
        border: `1px solid ${bgcolor}`,
      }}
      disabled={!load}
    >
        {content}
    </button>
  );
};

export default Buttons;
