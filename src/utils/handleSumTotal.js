  export const handleSumTotal = () => {
      // vamos a utilizarlo como un reduce y tomar cada item de precio
      // y sumarlo en uno mismo.
      const reducer = (accumulator, currentValue) => accumulator +currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum; 
  }
