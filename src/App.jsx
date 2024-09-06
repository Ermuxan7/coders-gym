import Category from "./components/Category/category"
import Banner from "./components/banner"
import Main from "./components/main"
import Navbar from "./components/Navbar/navbar"
import Offer from "./components/offer"

const categoryBtn = ['All', 'Yoga', 'Fitness' ,'Muscle']

const BannerData = {
    id: 1,
    image: 'girl.png',
    title: 'The Importants To Take care of yourself',
    desc: 'The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.'
}

const BannerData2 = {
    id: 2,
    image: 'girl2.png',
    title: 'The Importants To Take care of yourself',
    desc: 'The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.'
}

const App = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <Offer/>
      <Banner {...BannerData} />
      <Category/>
      <Banner {...BannerData2} />
    </>
  )
}

export default App