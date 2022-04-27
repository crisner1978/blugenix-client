const FreeButton = ({description, style_1, style_2, onClick}) => {
  return (
    <div className={style_1}>
      <button className={style_2} onClick={onClick}>
        {description}
      </button>
    </div>
  );
};

export default FreeButton;
