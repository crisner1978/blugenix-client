import { isDarkState } from "atoms/isDarkAtom";
import { modalState } from "atoms/modalAtom";
import FreeButton from "components/FreeButton";
import Hero from "components/Hero";
import Section from "components/Section";
import { benefits } from "lib/benefits";
import { useNavigate } from "react-location";
import { useRecoilState } from "recoil";

export default function HomePage() {
  const [open, setOpen] = useRecoilState(modalState);
  const [theme] = useRecoilState(isDarkState);
  const navigate = useNavigate();
  return (
    <>
      <Hero
        image_1="https://res.cloudinary.com/dtram9qiy/image/upload/v1641961381/my-uploads/k01tmcqcnvqgwmjhvy7h.jpg"
        image_2="https://res.cloudinary.com/dtram9qiy/image/upload/v1641955967/blugenix/oucr6qg64ooxu9rtc5h4.png"
        image_3="https://res.cloudinary.com/dtram9qiy/image/upload/v1641955409/blugenix/k2xdhcbhjpvju9qssukz.png"
        slogan="turn back the clock to the way you felt in your 20's"
        description="Blugenix specializes in Bio-Identical Testosterone & Growth Hormone Therapies."
        info="20 years of experience. doctor prescribed and monitored programs include personal health coaches to keep you on track."
        style_1="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px] text-white dark:text-gray-200"
        style_2="absolute h-[400px] sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px] object-cover object-top w-screen"
      >
        <FreeButton
          description="Speak with the team today"
          style_1="md:ml-auto md:pr-6 mt-2 sm:mt-4 align mr-3 md:mr-0"
          style_2="navBtn  sm:text-xl p-3 shadow-inner capitalize"
          onClick={() => setOpen(true)}
        />
      </Hero>
      <Section
        style_section="py-10 md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-7xl mx-auto md:gap-5"
        heading="What is Blugenix"
        subheading="Blugenix uses precision and restorative medicine to get real results. Increased energy. Enhanced sex drive. Improved sleep. Increased sense of well-being and focus."
        s_para_1="mt-8"
        s_para_2="mt-8"
        s_para_3="mt-8"
        para_1="All while maximizing your body composition, improving lean muscle mass and accelerating fat metabolism."
        para_2="The initial comprehensive laboratory panel will access your current hormone levels as well as your health panels. With this data, 
                our team will map out a personalized, doctor monitored therapy program designed for you to achieve your health goals."
        para_3="Our Hormone Replacement Therapies will restore your hormone levels back to where they were in the prime of your life - 
                allowing you to live your best life no matter your age."
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 pt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3"
            description="Learn more about Blugenix"
            onClick={() => navigate({ to: "therapies", replace: false })}
          />
        }
      >
        <img
          className="rounded-3xl"
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1642017528/my-uploads/twllqdxixj4se8zcdnya.jpg"
          alt=""
        />
      </Section>

      <Section
        style_section="pt-48 pb-36 md:flex-row items-center md:flex flex flex-col-reverse max-w-7xl mx-auto md:gap-5"
        heading="How we help"
        subheading="Your coach for performant health and wellness optimization"
        para_1="As we age, our bodies begin to wear out over time. 
                We lose muscle mass, accumulate bodyfat, experience higher stress levels along with a decreased sense of well-being. 
                This can be caused by a number of factors, one of them being a decline in our bodies ability to make hormones."
        para_2="What now?"
        para_3="Our team combined with a physician monitored therapy program aims to turn back your biological clock 
                and provide powerful benefits. By optimizing our clients' hormone levels - you'll essentially feel how you did in your 20's, 
                feeling completely rejuvenated and revitalized."
        s_para_1="mt-8"
        s_para_3="mt-8"
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 pt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3"
            description="Learn More Today"
            onClick={() => setOpen(true)}
          />
        }
      >
        <img
          className="rounded-3xl "
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1642452655/my-uploads/rhmsygtsndaeynsaryv5.jpg"
          alt=""
        />
      </Section>

      {/* We help optimize our clients' hormone levels, providing powerful benefits from increased energy and 
                       fat burning to improve sex drive and performance. 
                       We're anti-aging experts focused on providing Hormone Replacement Therapy 
                       to turn back your biological clock and provide powerful benefits. Feel completely rejuvenated and revitalized,
                       We provide individualized, 
                       */}
      <section className="pt-12 pb-12 md:pb-36 bg-cyan-100 dark:bg-cyan-900 bg-opacity-50 ">
        <div className="max-w-7xl mx-auto px-5">
          <h2
            className="text-center md:text-left inline-flex text-3xl sm:text-4xl font-fancy mb-10
                        font-medium leading-normal md:leading-normal lg:leading-snug xl:leading-snug"
          >
            The Blugenix program provides these powerful benefits:
          </h2>
          <div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ id, title, img, info }) => (
                <li key={id} className="flex flex-col items-start mb-5">
                  <figure className="benefit_icon">
                    <img src={img} alt="" className="h-10 w-10" />
                  </figure>
                  <h3 className="mb-3 text-xl dark:text-white">{title}</h3>
                  <div>
                    <p className="pr-10 mb-5 font-avenir text-lg text-gray-900 dark:text-gray-100">
                      {info}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="hidden md:flex before:absolute md:-mt-36">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill={theme === "dark" ? "#000000" : "#ffffff"}
            fillOpacity="1"
          ></path>
        </svg>
      </div>
      <section className="bg-white dark:bg-black">
        <div className="py-10 pb-20 max-w-7xl mx-auto px-5 md:pt-28 md:pb-28 md:flex-row items-center md:flex flex flex-col md:gap-5">
          <div className="md:w-1/2 mb-10">
            <p className="font-fancy text-2xl font-medium lg:text-3xl leading-normal md:leading-normal lg:leading-snug xl:leading-normal">
              100% of our Clients start their program remotely. Lab work is done
              through LabCorp in your local area. We bring the doctor to you via
              video consultations.
            </p>
            <FreeButton
              description="Find out more"
              style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 pt-8"
              style_2="text-lg sm:text-xl navBtn shadow-inner p-3"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="md:w-1/2">
            <img src="map.svg" alt="" />
          </div>
        </div>
      </section>

      <h2 className="text-3xl">I'm the Home Page Let's Go</h2>
      <h3 className="text-3xl">I'm the Home Page Yes</h3>
      <h4 className="text-3xl">I'm the Home Page Oh Yeah</h4>
    </>
  );
}
