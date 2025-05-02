
const TextSection = ({ text1, text2}: { text1: string, text2: string}) => {
    return (
      <section className="bg-white text-primary py-10 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-2">

            
            <h2 className="md:text-3xl text-xl font-semibold leading-relaxed max-w-6xl mx-auto"
              >
              &quot;{text1}
              <br />
              {text2}&quot;
            </h2>
          </div>
        </div>
      </section>
    );
  };
  
  export default TextSection;