const FreeButton = ({description, style_1, style_2, onClick}) => {
  return (
    <div className={style_1} onClick={onClick}>
      <button className={style_2}>
        {description}
      </button>
    </div>
  );
};

export default FreeButton;
