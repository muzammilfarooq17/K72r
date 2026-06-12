import BottomText from "../Components/Home/BottomText"
import TopText from "../Components/Home/TopText"
import Vedio from "../Components/Home/Vedio"

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Vedio />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <TopText />
        <BottomText />
      </div>
    </div>
  )
}

export default Home