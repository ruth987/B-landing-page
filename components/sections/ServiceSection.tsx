const ServiceSection = () => {
    return (
      <section className="bg-primary text-secondary-text2 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="md:text-xs text-[10px]">
              Persönlicher Service
            </span>
            
            <h2 className="md:text-3xl text-xl font-semibold leading-relaxed max-w-4xl mx-auto"
              >
              &quot;Wir beraten Sie zu Zeithorizont,
              <br />
              nachhaltiger Abwicklung und Ankauf.&quot;
            </h2>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection;