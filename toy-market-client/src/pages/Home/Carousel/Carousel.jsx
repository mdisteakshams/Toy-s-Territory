import p2 from "../../../assets/cr2.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="relative w-full">
        <img className="h-[1000px] w-full" src={p2} alt="" />
        <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 md:pl-20 pl-5 w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-semibold">Adventure Awaits: Discover the Ultimate Toyland</h2>
            <p className="text-sm md:text-base">
              Welcome to our whimsical wonderland of toys, where endless excitement and joy await! Immerse yourself in a world of boundless imagination and play as you explore our carefully curated collection of toys. From classic favorites to the latest trends, we have something for every child and the child-at-heart.
            </p>
            <p className="text-sm md:text-base">
              Unleash your inner adventurer and embark on thrilling journeys with our action figures, building sets, and playsets. Let your creativity soar with our arts and crafts supplies, inspiring little artists to create masterpieces. Experience the joy of learning through play with our educational toys, designed to spark curiosity and foster growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;




// import p2 from "../../../assets/cr2.jpg";
// const Carousel = () => {
//   return (
//     <div>
//       <div className="relative w-full">
//         <img className="h-[1000px] w-full" src={p2} alt="" />
//         <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//           <div className="text-white space-y-7 pl-20 w-1/3">
//             <h2 className="text-5xl font-semibold">Adventure Awaits: Discover the Ultimate Toyland</h2>
//             <p>Welcome to our whimsical wonderland of toys, where endless excitement and joy await! Immerse yourself in a world of boundless imagination and play as you explore our carefully curated collection of toys. From classic favorites to the latest trends, we have something for every child and the child-at-heart.
//             </p>
//             <p>Unleash your inner adventurer and embark on thrilling journeys with our action figures, building sets, and playsets. Let your creativity soar with our arts and crafts supplies, inspiring little artists to create masterpieces. Experience the joy of learning through play with our educational toys, designed to spark curiosity and foster growth.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
