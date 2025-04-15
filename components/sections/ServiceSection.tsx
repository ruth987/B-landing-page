
const TextSection = ({topText, text1, text2}: {topText: string, text1: string, text2: string}) => {
    return (
      <section className="bg-secondary-light text-primary py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="md:text-xs text-[10px]">
             {topText}
            </span>
            
            <h2 className="md:text-3xl text-xl font-semibold leading-relaxed max-w-4xl mx-auto"
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