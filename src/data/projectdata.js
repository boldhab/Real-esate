
import header_img from '../assets/header_img.png'
import brand_img from '../assets/brand_img.png'
import project_img_1 from '../assets/p3.avif'
import project_img_2 from '../assets/project_img_2.jpg'
import project_img_3 from '../assets/project_img_3.jpg'
import project_img_4 from '../assets/p2.jpg'
import project_img_5 from '../assets/p1.jpg'
import project_img_6 from '../assets/project_img_6.jpg'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import profile_img_3 from '../assets/profile_img_3.png'
import person1 from '../assets/pe1.jpg'
import person2 from '../assets/pe2.jpg'
import person3 from '../assets/profile_img_3.png'

export const assets = {

  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,

}

export const projectsData = [
  {
    id: 1,
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "Addis Ababa, Bole",
    image: project_img_1,
    description: "A beautiful high-rise apartment with stunning views of the city skyline. Features modern amenities, a rooftop pool, and 24/7 security."
  },
  {
    id: 2,
    title: "Vista Verde",
    price: "$2,50,000",
    location: "Adama",
    image: project_img_2,
    description: "Located in the heart of the city, Vista Verde offers a blend of luxury and convenience. Close to major tech hubs and cultural landmarks."
  },
  {
    id: 3,
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Bahir Dar",
    image: project_img_3,
    description: "Experience peace and tranquility in these spacious suites. Includes a private garden, gym access, and premium concierge services."
  },
  {
    id: 4,
    title: "Central Square",
    price: "$2,50,000",
    location: "Hawassa",
    image: project_img_4,
    description: "Modern living at its finest. Central Square provides easy access to shopping, dining, and entertainment districts."
  },
  {
    id: 5,
    title: "Vista Verde",
    price: "$2,50,000",
    location: "Gondar",
    image: project_img_5,
    description: "A second phase of the popular Vista Verde complex, offering upgraded interiors and smart home integration."
  },
  {
    id: 6,
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Mekelle",
    image: project_img_6,
    description: "Luxury suites with panoramic lake views. Perfect for those seeking an elegant and comfortable lifestyle."
  },

];
export const agentdata = [{
  name: "Biruk Belay",
  image: person1,
}, {
  name: "Habtamu Belay",
  image: person2,
}, {
  name: "Mikias Getachew",
  image: person3,
}

];
export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  }
];