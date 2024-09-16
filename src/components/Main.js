import { FaSnapchatGhost, FaInstagram, FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const cards = [
  {
    icon: <FaSnapchatGhost className=' text-2xl text-white' />, task: 'Share on Snapchat', bgcolor: 'bg-yellow-300', points: '20 points'
  },
  {
    icon: <FaInstagram className=' text-2xl text-white' />, task: 'Share on Instagram', bgcolor: 'bg-pink-300', points: '30 points'
  },
  {
    icon: <FaWhatsapp className=' text-white text-2xl' />, task: 'Share on WhatsApp', bgcolor: 'bg-green-300', points: '25 points'
  },
  {
    icon: <FaTwitter className=' text-white text-2xl' />, task: 'Share on Twitter', bgcolor: 'bg-blue-300', points: '15 points'
  },
  {
    icon: <FaFacebook className=' text-white text-2xl' />, task: 'Share on Facebook', bgcolor: 'bg-red-300', points: '20 points'
  },
  {
    icon: <FaLinkedin className=' text-white text-2xl' />, task: 'Share on LinkedIn', bgcolor: 'bg-green-300', points: '35 points'
  },
  {
    icon: <FaWhatsapp className=' text-white text-2xl' />, task: 'Share on WhatsApp', bgcolor: 'bg-green-300', points: '25 points'
  },
  {
    icon: <FaTwitter className=' text-white text-2xl' />, task: 'Share on Twitter', bgcolor: 'bg-blue-300', points: '15 points'
  },
];
  
  const Main = () => {
    return (

      <div className="  mt-5 mb-4 flex flex-wrap justify-start items-center gap-8 ml-4">
        {cards.map((item, index) => (
          <div key={index} className={` border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200   flex flex-col justify-center h-[90px] gap-2 rounded-lg p-2 w-[45%] ${item.bgcolor}`}>

        <div className="  flex flex-row justify-between  items-center">
               <span>{item.icon}</span>
               <span className='  font-bold text-white'>{item.points}</span>
        </div> 
        <div className=' font-bold' >{item.task}</div>

          </div>
        ))}
      </div>

    );
  };
  
  export default Main;
  