/* eslint-disable react/prop-types */
function Card({ item }) {
  return (
    <>
      <div className="my-4 mx-3 p-4">
        <div className="card bg-base-100 w-93 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
