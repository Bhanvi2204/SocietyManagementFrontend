// import GetInTouchForm from "@/components/Page-Components/GetInTouchForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Separator } from "@/components/ui/seperator";
// import {
//   ArrowRight,
//   Calendar,
//   Github,
//   Linkedin,
//   Mail,
//   Twitter,
// } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import drishti from "../assets/drishti-hero.png";
import latestnews from "../assets/latestnews.png";

// type NewsItem = {
//   NewsID: string;
//   Title: string;
//   Author: string;
// };

// type StudentProfile = {
//   EnrollmentNo: string;
//   FirstName: string;
//   LastName: string;
//   ProfilePicture: string;
//   GithubProfile: string;
//   LinkedInProfile: string;
//   TwitterProfile: string;
//   DomainExpertise: string;
//   SocietyPosition: string;
//   Email: string;
// };

// type Testimonial = {
//   EnrollmentNo: string;
//   TestimonialDescription: string;
// };

type Society = {
  SocietyName: string;
  Societytype:string;
  SocietyHead: string;
  SocietyDescription: string;
  DateOfRegistration: string;
  // News: NewsItem[];
  // StudentProfiles: StudentProfile[];
  // Testimonials: Testimonial[];
};

const fakeData: Society = {
  SocietyName: "Namespace",
  SocietyHead: "John Doe",
  Societytype:"Technical",
  DateOfRegistration:"2019",
  SocietyDescription: "A society dedicated to tech enthusiasts.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure corrupti fugit architecto corporis similique aliquam voluptas tempora ducimus inventore quia!",
  // News: [
  //   {
  //     NewsID: "1",
  //     Title: "Tech Conference 2024",
  //     Author: "Jane Smith",
  //   },
  //   {
  //     NewsID: "2",
  //     Title: "AI Workshop",
  //     Author: "Alex Johnson",
  //   },
  // ],
  // StudentProfiles: [
  //   {
  //     EnrollmentNo: "123",
  //     FirstName: "Alice",
  //     LastName: "Williams",
  //     ProfilePicture: "https://via.placeholder.com/200",
  //     GithubProfile: "https://github.com/alice",
  //     LinkedInProfile: "https://linkedin.com/in/alice",
  //     TwitterProfile: "https://twitter.com/alice",
  //     DomainExpertise: "Web Development",
  //     SocietyPosition: "President",
  //     Email: "alice@example.com",
  //   },
  //   {
  //     EnrollmentNo: "456",
  //     FirstName: "Bob",
  //     LastName: "Brown",
  //     ProfilePicture: "https://via.placeholder.com/200",
  //     GithubProfile: "https://github.com/bob",
  //     LinkedInProfile: "https://linkedin.com/in/bob",
  //     TwitterProfile: "https://twitter.com/bob",
  //     DomainExpertise: "Machine Learning",
  //     SocietyPosition: "Vice President",
  //     Email: "bob@example.com",
  //   },
  // ],
  // Testimonials: [
  //   {
  //     EnrollmentNo: "123",
  //     TestimonialDescription:
  //       "Being part of this society has been a great experience.",
  //   },
  //   {
  //     EnrollmentNo: "456",
  //     TestimonialDescription: "I've learned so much and made many friends.",
  //   },
  // ],
};

const Society = () => {
  const { id } = useParams();
  const [society, setSociety] = useState<Society | null>(null);
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    setTimeout(() => {
      setSociety(fakeData);
    }, 1000);
  }, [id]);

  if (!society) return <div>Loading...</div>;
  const path = location.pathname === `/society/${id}`
  return (
    <div >
   
      <Outlet/>
      {path && (
        <div>
      <div className="w-full flex justify-between bg-gradient-to-tr from-purple-200 to-gray-300">
        <div className="ml-20 pt-10">
          <h3 className="text-3xl text-purple-700 font-bold">
            Welcome to {society.SocietyName}:  {society.Societytype} Society
          </h3>
          <h2 className="text-3xl text-red-500 font-bold">
            {society.SocietyHead}
          </h2>
          <p className="text-muted-foreground">Building a Legacy Since {society.DateOfRegistration}</p>
        </div>
        <div>
          <img src={drishti} alt="" />
        </div>
      </div>

      <div className="w-full px-20 flex justify-center py-10 gap-7">
        <div className="flex justify-center gap-7 p-10 rounded-md border-4">
          <div>
            <img src={latestnews} width={600} alt="" />
          </div>
          <div>
            <Card className="rounded-lg space-y-3 border-0">
              <CardHeader className="text-center">
                <h2 className="font-bold text-4xl">Who We Are</h2>
                <hr className="h-[4px] text-black" />
              </CardHeader>
              <CardContent className="my-10">
                <h1 className="text-xl font-medium">Guided by Excellence: {society.SocietyHead}</h1>
                <p>{society.SocietyDescription}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-yellow-500">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* <div className="w-full px-20 flex justify-center bg-gray-100 py-10 gap-7">
        <div className="w-[35%]">
          <Card className="rounded-lg space-y-3">
            <CardHeader className="bg-blue-700 text-white text-center font-bold text-2xl">
              LATEST NEWS
            </CardHeader>
            <CardContent className="space-y-10">
              {society.News.map((newsItem) => (
                <div key={newsItem.NewsID} className="flex gap-4 mt-10">
                  <Calendar />
                  <div>
                    <h4>{newsItem.Title}</h4>
                    <p className="text-muted-foreground">
                      Published by: {newsItem.Author}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">21 min ago</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={() => navigate(`/society/${id}/news`)}
                className="bg-yellow-600"
              >
                <ArrowRight /> View More
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[50%]">
          <img src={latestnews} alt="" />
        </div>
      </div> */}

      {/* <div className="w-full px-20 flex py-10 gap-7 flex-col items-center">
        <h1 className="font-bold text-4xl">
          Meet the visionaries driving our mission
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {society.StudentProfiles.map((student) => (
            <Card key={student.EnrollmentNo}>
              <CardHeader>
                <div className="flex">
                  <img
                    className="rounded-md border-2 border-black mr-2"
                    width={200}
                    src={student.ProfilePicture}
                    alt=""
                  />
                  <div className="flex flex-col gap-5 mt-10">
                    <div className="flex gap-5">
                      <a href={student.GithubProfile}>
                        <Github />
                      </a>
                      <a href={student.LinkedInProfile}>
                        <Linkedin />
                      </a>
                      <a href={student.TwitterProfile}>
                        <Twitter />
                      </a>
                    </div>
                    <div>
                      <h2 className="font-bold underline">
                        Domain of Experience
                      </h2>
                      <p>{student.DomainExpertise}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="font-bold text-2xl">
                  {student.FirstName} {student.LastName}
                </h2>
                <p className="text-muted-foreground">
                  {student.SocietyPosition}
                </p>
                <p className="flex gap-1 items-center text-muted-foreground">
                  <Mail size={20} /> {student.Email}
                </p>
              </CardContent>
              <Separator className="my-5 h-[2px]" />
              <CardFooter>
                <p>
                  Your dedication and innovation drive our success. Proud to
                  lead such a talented team.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div> */}

      {/* <div className="w-full flex bg-gray-100 py-10 px-20">
        <div className="w-[50%]">
          <h3 className="font-bold text-3xl text-center">Get In Touch</h3>
          <p className="text-muted-foreground text-center">
            we will answer your questions and problems.
          </p>

          <GetInTouchForm />
        </div>
        <div className="w-[50%]">
          <img src={latestnews} alt="" />
        </div>
      </div> */}

      {/* <div className="w-full bg-muted flex flex-col justify-center items-center mt-12">
        <div className="bottom-full lg:botton-96 left-1/4 bg-blue-800 text-white px-5 rounded-full text-xl relative py-2">
          <h1>namespace(Formely NSCC)</h1>
        </div>
        <div className="text-2xl self-start relative left-12 md:left-44">
          Student <span className="text-red-700">Stories</span>
        </div>
        <Carousel
          className="lg:w-10/12 md:w-8/12 w-4/6 border-none"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {society.Testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-muted">
                  <CardContent className="p-5">
                    <div className="flex flex-col lg:flex-row items-center gap-9">
                      <section className="w-2/3">
                        <p className="text-5xl font-bold">&quot;</p>
                        <p>{testimonial.TestimonialDescription}</p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mt-3">
                          <div>
                            <h1>{testimonial.EnrollmentNo}</h1>
                          </div>
                          <button className="w-36 text-center bg-gray-200 text-black">
                            View More
                          </button>
                        </div>
                      </section>
                      <img
                        src="https://media.istockphoto.com/id/1448069480/photo/happy-young-indian-student-boy-working-on-laptop-and-studying-in-college-library-with.webp?b=1&s=170667a&w=0&k=20&c=5t956TDdrYeVbBpMnfzr0-RZK-ZaWpzMR2mcvCH5Nh8="
                        alt="image"
                        className="w-2/3 lg:w-1/3 rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div> */}
      </div>
      )}
    </div>
  );
};

export default Society;
