import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Profile = () => {
    return (
        <main>
         <Nav />

         <div class="pt-[100px] px-[100px] mb-10 bg-no-repeat">
<a class="flex items-center p-3 text-black rounded-lg group font-bold text-[25px] mb-8 pt-[20px]">
            <img class="w-30 h-30" src="src/Assets/Profile/Kevin.png"></img>
               <span class="flex-1 ms-3 whitespace-nowrap">Kevin</span>
               <button type="submit" class="text-white bg-[#E53935] hover:bg-[#d24744] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center">Edit</button>
            </a>           
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-black">Nama Lengkap</label>
            <input type="text" id="first_name" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Kevin Sanjaya" disabled />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-black">Tanggal Lahir</label>
            <input type="text" id="last_name" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="15-3-1999" disabled />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-black">Email</label>
            <input type="text" id="company" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="kevinsa*****@gmail.com" disabled />
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-blac">Kecamatan</label>
            <input type="text" id="phone" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" disabled />
        </div>
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-blac">No. Handphone</label>
            <input type="text" id="phone" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="089213****" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" disabled />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-black">RT / RW</label>
            <input type="text" id="last_name" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="15-3-1999" disabled />
        </div>
        <div>
        <label for="email" class="block mb-2 text-sm font-medium text-blac">Kelurahan / Desa</label>
        <input type="email" id="email" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" disabled />
    </div> 
    </div>
    
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-blac">Alamat Lengkap</label>
        <input type="password" id="password" class="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Jl. Pondok Genggong No. 1924 RT.39 RW.66, Jawa Barat, Indonesia." disabled />
    </div> 
</form>
</div>

<Footer />  
        </main>
        
  );
};

export default Profile;