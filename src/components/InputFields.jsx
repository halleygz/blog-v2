
const InputFields = ({ content, name, id, type }) => {
  return (
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[4.4px]">
        <label className="w-[275.5px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]">
          {content}
        </label>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type={type} id={id} name={name}
        />
      </div>
      
  );
};


export default InputFields;
