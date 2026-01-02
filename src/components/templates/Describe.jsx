import { FaLeaf } from "react-icons/fa";

export default function Describe() {
  return (
    <div className='second-container w-full'>
        <div className='flex items-center justify-center flex-col gap-y-4 my-28'>
            <h2 className='text-4xl text-[#0A250E] font-bold'>به فضاهای بیرونی خود جان ببخشید</h2>
            <p className="text-center text-[#0F3714B3] text-[17.5px] font-regular leading-7">“مناظر عالی خود به خود به وجود نمی‌آیند – آنها ابتدا در قلب تصور می‌شوند، سپس با دقت توسط دستانی که هم طبیعت و هم طراحی را درک می‌کنند، شکل می‌گیرند. هر باغ بازتابی آرام از مراقبت، خلاقیت و زمان است – فضایی زنده که در آن زیبایی به آرامی، متفکرانه و هدفمند رشد می‌کند.”</p>
        </div>

        <div className="flex text-center justify-between gap-x-10">
            <div className="flex-1 relative">
                <img  src="images/human.jpg" className="w-full h-full rounded-tr-[80px] rounded-bl-[80px]"/>

                <div className="w-[220px] bg-secondary-color inline-flex flex-col max-w-full items-center pt-9 pb-11 absolute z-20 bottom-1/2 right-full translate-x-8/9 -translate-y-1/8 rounded-tl-[40px] rounded-br-[40px] overflow-hidden before:content-[''] before:block before:w-full before:h-full before:absolute before:bg-four-color before:opacity-60 before:z-10 before:rounded-full before:-right-1/2 before:top-1/2">
                    <FaLeaf className="text-primary-color" size={30}/>
                    <h4 className="text-white text-[70px]">35<span className="text-lg">+</span></h4>
                    <p className="text-white text-xl">سال باغی</p>
                </div>
            </div>
            <div className="flex-1 flex items-start flex-col bg-blue-600">
                <span className="text-xs">ما که هستیم</span>
                <h4 className="text-4xl max-w-[500px] text-start"> 

                 طراحی حرفه‌ای فضای سبز و
                  مراقبت از باغ</h4>
            </div>
        </div>
    </div>
  )
}