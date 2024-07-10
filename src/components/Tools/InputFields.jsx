const InputFields = ({ content, name, id, type }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[4.4px]">
      <label className="w-[275.5px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]  min-w-[117px]">
        {content}
      </label>
      <input
        className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100 mt-3"
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
};
const TextArea = ({content}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[4px]">
      <div className="w-[269.6px] relative leading-[22.7px] font-light inline-block mq450:text-lgi mq450:leading-[18px]">
        {content}
      </div>
      <textarea
        className="bg-[transparent] h-[253.3px] w-auto [outline:none] self-stretch relative box-border border-[1px] border-solid border-gray-100"
        rows={13}
        cols={34}
      />
    </div>
  );
};

export {InputFields, TextArea};
