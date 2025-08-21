import { useParams } from "react-router-dom";
// import FirstWhiteCar from "../assets/FirstWhiteCar.png";
// import secondCar from "../assets/secondCar.png";
// import thirdCar from "../assets/thirdCar.jpg";
// import fourthCar from "../assets/fourthCar.png";
// import fifthCar from "../assets/fifthCar.png";
// import sixthCar from "../assets/sixthCar.png";
import "./Mirage";

// type Van = {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   type: string;
// };
//
// const vansData: Van[] = [
//   { id: 1, image: FirstWhiteCar, title: "Most explorer", price: 60, type: "Simple" },
//   { id: 2, image: secondCar, title: "Most explorer", price: 60, type: "Simple" },
//   { id: 3, image: thirdCar, title: "Most explorer", price: 60, type: "Simple" },
//   { id: 4, image: fourthCar, title: "Most explorer", price: 60, type: "Simple" },
//   { id: 5, image: fifthCar, title: "Most explorer", price: 60, type: "Simple" },
//   { id: 6, image: sixthCar, title: "Most explorer", price: 60, type: "Simple" },
// ];
//

//const [van, setVan] = useState(null)

function VanDetails() {
  const { id } = useParams();

  return (
    <>
      <div>these are deatails of the Van {id}</div>
      <div className="bg-gray-900 w-full h-32 place-self-center">
        <footer className="p-14 mt-24 text-center text-gray-500">
          &copy; 2022#VANLIFE
        </footer>
      </div>
    </>
  );
  //   <div className="place-self-center">
  //
  //
  //       <div className="flex gap-3 flex-wrap"> {/* flex-wrap added for responsiveness */}
  //         {vansData.map(({ id, image, title, price, type }) => (
  //           <div key={id} className="w-1/3 p-2"> {/* adjust width as needed */}
  //
  //               <div id={String(id)} className="cursor-pointer">
  //                 <img className="size-96 w-full object-cover" src={image} alt={`Van ${id}`} />
  //                 <div>
  //                   <div className="flex justify-between p-4">
  //                     <h1>{title}</h1>
  //                     <h1>
  //                       ${price} <br />
  //                       /day
  //                     </h1>
  //                   </div>
  //                   <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">{type}</button>
  //                 </div>
  //               </div>
  //
  //           </div>
  //         ))}
  //       </div>
  // </div>
}

export default VanDetails;
