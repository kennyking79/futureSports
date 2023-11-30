

export default function ShopItem({ item }) {
  return (
    
    
    <article className="item">
        <figure>
          <img
          className="avatar"
          src={item.image_ref}
          alt={item.item_name}
          // width={size}
          // height={size}
          />
          <figcaption>
              <h3>{item.item_name}</h3>
              <p>${item.item_cost}</p>
          </figcaption>
        </figure>
        <button>Add to Cart</button>
    </article>

    
    
  );
}
