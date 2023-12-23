"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Girma Tesfaye",
    avatar: "G",
    title: "Full Stack Developer",
    description: "Any sufficiently advanced technology is indistinguishable from magic.",
  },
  {
    name: "Mintesnot Yismaw",
    avatar: "M",
    title: "Sr. Full Stack developer",
    description: "I became interested in long-term trends because an invention has to make sense in the world in which it is finished, not the world in which it is started.",
  },
  {
    name: "Yared Samuel",
    avatar: "Y",
    title: "Full-Stack developer",
    description: "What will limit us is not the possible evolution of technology, but the evolution of human purposes.",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#fff] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg text-black my-text-color">{item.name}</p>
                  <p className="text-zinc-600 text-sm my-text-color">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 my-text-color text-zinc-400">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}