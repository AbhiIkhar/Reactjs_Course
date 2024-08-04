const ItemCard = (props) => {
  const { resObj } = props;
  // console.log(resObj);
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">{resObj?.name}</h1>
      <h3>{resObj?.category}</h3>
      <p>{resObj?.description}</p>
    </div>
  );
};

export default ItemCard;
