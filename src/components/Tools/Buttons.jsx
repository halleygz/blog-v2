import React from 'react';

const Buttons = ({ content, bgcolor, isLoading, onClick }) => {
  
  const load = toString(isLoading)

  return (
    <button
      className={`my-0 h-12 w-[167.7px] text-[1.3rem] text-[#2f3645] font-bold font-lexend-deca ${!load ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        backgroundColor: bgcolor,
        border: `1px solid ${bgcolor}`,
      }}
      onClick={onClick}
      disabled={!load}
    >
        {content}
    </button>
  );
};

export default Buttons;
