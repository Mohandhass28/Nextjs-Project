import Card from "../Card/Card"
import ImgCard from "../ImgCard/ImgCard"

const Content = ({ issidebaropen }) => {
  const reconfig = issidebaropen ? "flex h-max w-[100%] bg-white ml-2 max-[1300px]:flex-col max-[980px]:flex-col" : "flex h-max w-[100%] bg-white ml-2 max-[980px]:flex-col"
  
  return (
    <div className={reconfig}>
      <div className="w-[90%] max-[980px]:w-[100%]  flex flex-col h-max bg-white p-4">
        <div className='w-max'>
          <h5 className="text-rose-400 w-max pl-1 pr-1 rounded-[10px] bg-gray-100 font-bold text-[34px] uppercase">Disscussion Fourm</h5>
        </div>
        <div className="flex flex-col gap-4 mt-2 mr-20 max-[940px]:mr-[2rem] max-[1200px]:mr-[0] ml-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>  
      <div className="flex flex-col w-[40%] max-[980px]:w-[100%] max-[980px]:items-center  bg-white h-screen mr-5">
        <div className="w-[100%] flex flex-col p-4">
          <div className='w-max'>
            <h5 className="text-rose-400 w-max pl-1 pr-1 rounded-[10px] bg-gray-100 font-bold text-[25px] uppercase">Market stories</h5>
          </div>
        </div>
        <div className="min-w-[90%] max-[980px]:w-[50%] ">
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
        </div>
      </div>
    </div>
  )
}

export default Content