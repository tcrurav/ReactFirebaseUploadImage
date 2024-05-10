import { useState } from "react";
import productService from "../../services/firebase/product.service";

function Home() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleImageSubmit = (e) => {
    e.preventDefault();
    productService.uploadProductImage(image).then((response) => {
      console.log("imagen subida");
      console.log(response)

      productService.getProductURL(response.ref).then((r) => {
        console.log("llegó url")
        console.log(r)
      })
    })
  }

  return (
    <form onSubmit={handleImageSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Subir imagen</button>
    </form>
  )
}

export default Home;