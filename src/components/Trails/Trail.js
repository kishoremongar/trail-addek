import React from "react";
import "./Trail.css";
import CardData from "./CardData";
import Card from "./Card";
import { useParams } from "react-router-dom";

const Trail = () => {
  const { trailId } = useParams();
  const trek = CardData.find((item) => item.id === trailId);
  return (
    <div className="mainContainer">
      <div className="left-pages page">
        <Card item={trek} />
      </div>
      <div className="right-pages page"></div>
    </div>
  );
};

export default Trail;

// <div className="card-header">
//           <img src={img} alt={place} />
//         </div>
//         <div className="card-info">
//           <div className="card-title">
//             <h3>{place}</h3>
//           </div>
//           <div className="card-level">
//             <h4>{level}</h4>
//           </div>
//           <div className="card-time">
//             <h4>{time}</h4>
//           </div>
//           <div className="card-price">
//             <h4>{price}</h4>
//           </div>
//         </div>

// const Trail = () => {
//   const [page, setPage] = useState(CardData);
//   return (
//     <div className="mainContainer">
//       <div className="left-pages page">
//         <Card
//           CardData={CardData}
//           key={CardData.id}
//           img={CardData.img}
//           level={CardData.level}
//           time={CardData.time}
//           price={CardData.price}
//           cart={CardData.cart}
//         />
//       </div>
//       <div className="right-pages page">
//         {CardData.map((data, index) => {
//           return (
//             <div key={index}>
//               <h2>{data.place}</h2>
//               <p>{data.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
