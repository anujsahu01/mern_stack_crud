import React from 'react'
import Cards from './Cards';

export default function CardTab() {
  return (
    <>
    
          
    <h1 className="text-center fw-bold my-4 heading-hover" >
  New Arrival
</h1>


      <br />

      {/* First 20 Cards (Manually) */}
      <div className="d-flex  justify-content-between  ">
        <Cards index={1} />
        <Cards index={2} />
        <Cards index={3} />
        <Cards index={4} />
        <Cards index={5} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={6} />
        <Cards index={7} />
        <Cards index={8} />
        <Cards index={9} />
        <Cards index={10} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={11} />
        <Cards index={12} />
        <Cards index={13} />
        <Cards index={14} />
        <Cards index={15} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={16} />
        <Cards index={17} />
        <Cards index={18} />
        <Cards index={19} />
        <Cards index={20} />
        </div>

      {/* Middle Offer Section */}
      <div className="position-relative w-100 my-5">
        <img
          src="./images/offer3.png"
          alt="Shopping Offer"
          className="img-fluid"
          style={{
            borderRadius: "15px",
            width: "calc(100% - 40px)",
            margin: "20px"
          }}
        />

        <div
          className="position-absolute top-50 end-0 translate-middle-y text-white p-4"
          style={{
            width: "50%",
            right: "40px"
          }}
        >
          <h2 className="fw-bold">BEST SAVINGS ON <br /> NEW ARRIVALS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur illum facilis praesentium.
          </p>
          <button className="btn btn-primary btn-lg me-2 hover-opacity">Buy Now</button>
          <button className="btn btn-outline-light btn-lg hover-opacity"
            onClick={() => window.location.href = "https://www.meesho.com/"}>
            See More
          </button>
        </div>
      </div>

      {/* Second Marquee */}
      <div
        className="bg-secondary bg-opacity-25 py-2 overflow-hidden position-relative"
        onMouseOver={(e) => {
          e.currentTarget.querySelector(".marquee-track").style.animationPlayState = "paused";
        }}
        onMouseOut={(e) => {
          e.currentTarget.querySelector(".marquee-track").style.animationPlayState = "running";
        }}
      >
        <div
          className="marquee-track d-flex"
          style={{
            animation: "scroll 8s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-4 fw-semibold fs-5 text-dark">
              Ladies Collection
            </span>
          ))}
        </div>
      </div>

      
      <div className="d-flex justify-content-between ">
        <Cards index={21} />
        <Cards index={22} />
        <Cards index={23} />
        <Cards index={24} />
        <Cards index={25} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={26} />
        <Cards index={27} />
        <Cards index={28} />
        <Cards index={29} />
        <Cards index={30} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={31} />
        <Cards index={32} />
        <Cards index={33} />
        <Cards index={34} />
        <Cards index={35} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={36} />
        <Cards index={37} />
        <Cards index={38} />
        <Cards index={39} />
        <Cards index={40} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={41} />
        <Cards index={42} />
        <Cards index={43} />
        <Cards index={44} />
        <Cards index={45} />
        </div>
        <div className="d-flex justify-content-between  ">
        <Cards index={46} />
        <Cards index={47} />
        <Cards index={48} />
        <Cards index={49} />
        <Cards index={50} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={51} />
        <Cards index={52} />
        <Cards index={53} />
        <Cards index={54} />
        <Cards index={55} />
        </div>
        <div className="d-flex justify-content-between ">
        <Cards index={56} />
        <Cards index={57} />
        <Cards index={58} />
        <Cards index={59} />
        <Cards index={51} />
      </div>

      {/* Style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .hover-opacity:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease-in-out;
        }

        .card-wrapper {
          flex: 0 0 calc(20% - 1rem); /* 5 cards per row */
          max-width: calc(20% - 1rem);
        }

        @media (max-width: 1200px) {
          .card-wrapper {
            flex: 0 0 calc(25% - 1rem);
            max-width: calc(25% - 1rem);
          }
        }

        @media (max-width: 992px) {
          .card-wrapper {
            flex: 0 0 calc(33.333% - 1rem);
            max-width: calc(33.333% - 1rem);
          }
        }

        @media (max-width: 768px) {
          .card-wrapper {
            flex: 0 0 calc(50% - 1rem);
            max-width: calc(50% - 1rem);
          }
        }

        @media (max-width: 576px) {
          .card-wrapper {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}
