import butterfly from '../public/images/butterfly.svg'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="h-screen bg-primary-brown flex justify-center items-center">
        <div>
            <div className="flex justify-end pl-20 ml-20">
                <Image src={butterfly} alt="butterfly" />
            </div>
            <div className="lg:h-loading lg:w-loading h-6 w-full rounded-2xl bg-primary-green mr-20"></div>
            <div className="font-georama text-3xl font-black">complete</div>
        </div>
    </div>
  )
}

export default Loading