
export default function MissionVision() {
return (
  <section className="bg-gray-100 py-12">
  <div className="max-container">
    <h2 className="text-3xl text-center font-semibold mb-8">Our Mission and Vision</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-md shadow-md transition ease-in-out delay-150 transform hover:scale-105 hover:border-blue-500 hover:border-4">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-600">
          To deliver innovative and reliable technology solutions that empower businesses and individuals to thrive in the digital era.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-6 rounded-md shadow-md transition ease-in-out delay-150 transform hover:scale-105 hover:border-blue-500 hover:border-4">
        <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-600">
          To be a global leader in technology, driving positive change through cutting-edge solutions, exceptional talent, and sustainable practices.
        </p>
      </div>
    </div>
  </div>
</section>
);
}
