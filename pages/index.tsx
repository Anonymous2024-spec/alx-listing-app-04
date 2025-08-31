import Pill from "@/components/common/Pill";
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";

// Booking Components
import BookingForm from "@/components/booking/BookingForm";
import Cancellation from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Mountain View",
  "Pet Friendly",
  "Private Pool",
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-2">Filter by:</h2>
        <div className="flex flex-wrap">
          {filters.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Top Properties</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <div key={idx}>
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-500">
                  ${property.price} / night
                </p>
                <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
        <BookingForm />
      </section>

      {/* Order Summary Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <OrderSummary />
      </section>

      {/* Cancellation Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
        <Cancellation />
      </section>
    </div>
  );
};

export default Home;
