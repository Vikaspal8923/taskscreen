 
import logo from '../logo.png'



function Header(){


   return(
 


<div class="sticky top-0 z-40 bg-white w-full p-3 ">
   <div class="flex justify-between items-center">
       <div class="flex items-center gap-2">
           <p>Task Details</p>
       </div>
       <div class="flex items-center gap-2">
          

           <div class="cursor-pointer select-none">
               <div class="flex items-center gap-2 bg-green-100 rounded-full p-2">
                   <p class="text-green-600 font-semibold text-xs">₹0.00</p>
               </div>
           </div>

           <div class="cursor-pointer select-none">
               <div class="flex items-center gap-2 border border-gray-300 rounded-full p-2">
                   <p class="text-gray-600 font-semibold text-xs">₹1000</p>
               </div>
           </div>

           <div class="cursor-pointer select-none">
               <img class="rounded-full w-7 h-7 object-cover" src={logo} alt="profilePic" />
           </div>

       </div>
   </div>
</div>



  
   )
}

export default Header;