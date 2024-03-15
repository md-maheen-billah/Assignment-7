const Cart = () => {
  return (
    <div className="border-2 rounded-3xl py-[28px]">
      <h2 className="text-center">Want to cook: </h2>
      <hr />
      <table className="mx-[56px]">
        <tr className="flex gap-12">
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
