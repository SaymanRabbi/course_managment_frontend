const Overly = () =>
  new Array(16)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className=" border-[10px] border-solid border-[#101130] pointer-events-none z-20"
      ></div>
    ));

export default Overly;
