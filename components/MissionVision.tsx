
export default function MissionVision() {
return (
  <section className="bg-gray-100 py-12" id="about_us">
  <div className="max-container">
    <h2 className="text-3xl text-center font-semibold mb-8" style={{color:"#0B82CF"}}>Our Mission and Vision</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-md shadow-md transition ease-in-out delay-150 hover:border-blue-200 hover:border-2">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-600" style={{textAlign:"justify"}}>
        MichuTech IT Solutions is dedicated to empowering businesses through innovative technology solutions In Ethiopia and beyond. Our mission is to deliver exceptional website development, software development, system development, and graphic design services globally. We strive to enhance our clients' business performance by providing high-quality, tailored solutions that meet their unique needs. Our commitment is to contribute to the growth and success of businesses by leveraging the power of technology and fostering long-term partnerships.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-6 rounded-md shadow-md transition ease-in-out delay-150 hover:border-blue-200 hover:border-2">
        <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-600"  style={{textAlign:"justify"}}>
        MichuTech IT Solutions aims to lead the technology solutions industry, recognized for innovation, quality, and client satisfaction. We strive to be the go-to partner for businesses seeking excellence in website development, software development, system development, and graphic design services.
        </p>
      </div>
    </div>
  </div>
</section>
);
}
