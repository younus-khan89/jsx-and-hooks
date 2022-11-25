import { useState } from "react";

function FavoriteDress() {
  const [dress, setDress] = useState("Tshirt");

  return (
    <>
      <h1>My favorite dress is {dress}!</h1>
      <button
        type="button"
        onClick={() => setDress("Shirt")}
      >Change Favorite Dress</button>
    </>
  )
}

export default FavoriteDress;