import { modalState } from "atoms/modalAtom";
import FreeButton from "components/FreeButton";
import Hero from "components/Hero";
import Section from "components/Section";
import { useNavigate } from "react-location";
import { useRecoilState } from "recoil";

export default function HomePage() {
  const [open, setOpen] = useRecoilState(modalState);

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
        style_section="mt-[50px] md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-7xl mx-auto md:gap-5"
        heading="What is Blugenix"
        subheading="Blugenix uses precision medicine to get real results. Increased stamina. Lower stress levels. Improved sleep. Increased concentration and desire."
        description="All while optimizing your body composition and slowing down your biological aging process. 
               
                      Our phlebotomists come to our Clients to collect 87 different biomarkers to get a baseline 
                      of your health. Each Client has a Performance Health Team that takes this data and evaluates 
                      it in combination with other tests included in our Performance Health Assessment, to develop 
                      a personalized, monitored health program designed for you to reach your health goals. 
                      
                      Since 1997, our proven age management program has helped over 33,000 Clients live their best lives."
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 pt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3"
            description="Learn more about Blugenix"
            onClick={() => navigate({ to: "therapies", replace: true })}
          />
        }
      >
        <img
          className="rounded-3xl"
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1642017528/my-uploads/twllqdxixj4se8zcdnya.jpg"
          alt=""
        />
      </Section>

      <div className=" h-full flex flex-col justify-center items-center pt-20 font-fancy space-y-5">
        <h1 className="text-3xl objec">I'm the Home Page Let's Do This</h1>
        {/* <div className="p-5 bg-white rounded-2xl flex items-center justify-center">
          <img className="h-10" src="icon-optimization.svg" alt="" />
        </div>
        <div className="p-5 bg-white rounded-2xl flex items-center justify-center">
          <img className="h-10" src="muscle.png" alt="" />
        </div>
        <div className="p-5 bg-white rounded-2xl flex items-center justify-center">
          <img className="h-10 text-blue-700 " src="bedBlue.png" alt="" />
        </div> */}
        <h2 className="text-3xl">I'm the Home Page Let's Go</h2>
        <h3 className="text-3xl">I'm the Home Page Yes</h3>
        <h4 className="text-3xl">I'm the Home Page Oh Yeah</h4>
      </div>
    </>
  );
}
