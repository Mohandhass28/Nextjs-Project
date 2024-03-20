import React from 'react'

const ImgCard = () => {
    return (
        <div className="bg-white text-black border-r-2 border-solid border-l-2 mt-5 ml-4 w-fit rounded-tr-[5px] rounded-tl-[5px]">
            <img src="./amazing-nature-mountain-scenery-during-sunset-free-photo.webp" alt="" className='w-[100%] h-[100%] rounded-tr-[5px] rounded-tl-[5px]' />
            <div className='p-5 w-[]'>
                <h1 className='font-bold text-[17px] mb-2 ml-1'>The Coldest Sunset</h1>
                <p className='text-[13px]'>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit.
                    Excepturi eius magnam reiciendis quidem eligendi consequuntur officiis.
                    Quod numquam fugit fugiat
                </p>
            </div>
        </div>
    )
}

export default ImgCard