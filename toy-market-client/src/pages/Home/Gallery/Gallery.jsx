import glr1 from "../../../assets/g1.jpg";
import glr2 from "../../../assets/g2.jpg";
import glr3 from "../../../assets/g3.jpg";
import glr4 from "../../../assets/g4.jpg";
import glr5 from "../../../assets/g5.jpg";
import glr6 from "../../../assets/g6.jpg";
import { FaStar } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-16 mb-16">
        <div className="">
          <div className="text-center">
            <h3 className="text-4xl text-orange-500 mb-5 font-semibold">
              Gallery
            </h3>
            <p className="mb-10">
              In this section you can see some famous vehicle toys <br /> which exists on real life are displayed. These are our most popular items.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr1} alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">FZS(NFS Edition)</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr2} className="h-[257px] w-full" alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">BMW-Hurracane</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr3} alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">Mclaren-400</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr4} alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">Lotus-Prisma</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr5} alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">MCarry Van</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={glr6} alt="Shoes" />
                </figure>
                <div className="m-5 flex justify-between">
                  <p className="font-semibold">Mercedes-Benz Truck</p>
                  <div className="flex">
                    <div className="flex items-center text-yellow-300">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
