const Section = ({ style_section, heading, subheading, description, children, component }) => {
  return (
    <section className={style_section}>
      <div className="md:max-w-md lg:max-w-xl xl:max-w-2xl px-5">
        <header className="inline-block uppercase text-lg xl:text-xl tracking-wide text-gray-500 dark:text-gray-100">{heading}</header>
        <h2 className="inline-flex text-2xl lg:text-3xl xl:text-4xl mt-[10px] font-fancy font-medium leading-normal md:leading-normal lg:leading-snug xl:leading-snug">{subheading}</h2>
        <p className="text-lg lg:text-xl pt-8">{description}</p>
        {component}
      </div>
      <div className="rounded-xl px-5 flex items-center justify-center mb-[50px] md:mb-0 md:max-w-xl">
          {children}
      </div>
    </section>
  );
};

export default Section;
