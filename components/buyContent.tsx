'use client';
import Card from "@/components/Card";
import { Filter } from "lucide-react";
import  {  useEffect, useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";



export default function BuyPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState({
    search: '',
    category: '',
    priceRange: '',
    location: '',
    isSorted: false,
  });
   const searchParams = useSearchParams();
  const router = useRouter();

 const searchfilter = searchParams.get("filter") || "All";
 const category = searchParams.get("category") || "All";
 const priceRange = searchParams.get("priceRange") || "All";
 
  const searchFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("searchfilter", value);
    router.push(`?${params.toString()}`);
  };

  const categoryFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`?${params.toString()}`);
  };

  const priceRangeFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("priceRange", value);
    router.push(`?${params.toString()}`);
  };


    const locationFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("location", value);
    router.push(`?${params.toString()}`);
  };

    const  handleConditionChange = (isSorted: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("isSorted", isSorted ? "true" : "false");
      router.push(`?${params.toString()}`);
    }


  
 useEffect(() => {
    console.log("Filters updated:", { searchfilter, category, priceRange });
  }, [searchfilter, category, priceRange]);



  return (
    <div className="flex min-h-screen font-sans  w-full md:mt-30 mt-15   bg-blue-100 ">
      
    <div className="grid  grid-cols-1 md:grid-cols-[0.4fr_1fr] py-10 relative ">
    <div className=" ">

      
           <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden bg-green-500 text-white p-3 rounded-lg w-[80%]   m-auto flex items-center justify-center gap-2 mb-8 md:mb-0"
          >
            <Filter size={20} />
            Filters
          </button>

      <div className={`  md:block  ${isFilterOpen ? 'block' : 'hidden'}  bg-green-500 space-y-10 text-white p-5  m-3 rounded-lg shadow-lg z-100 transition-all duration-100`}>
        <h2 className="text-xl font-bold mb-4 flex justify-between w-full ">
          <span>Filters</span><button className="text-red-600 cursor-pointer" 
          onClick={() => {
          setFilteredProducts({ search: '', category: '', priceRange: '' , location: '', isSorted: false });
         router.push('?');
          }}>
            Clear all
          </button></h2>
        <div className="">
        <div className="mb-4 ">
          <input
            name="search"
            type="text"
            value={filteredProducts.search}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-lg p-2"
            onChange={(e)=>{
              setFilteredProducts(prev => ({...prev, search: e.target.value}));
              searchFilter(e.target.value)
              
              }}
          />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Category</label>
          <select 
          value={filteredProducts.category}
          className="w-full border bg-green-500 border-gray-300 rounded-lg p-2"
           onChange={(e)=>{
            setFilteredProducts(prev => ({...prev, category: e.target.value}));
            categoryFilter(e.target.value) }}>
            <option value=''>All Categories</option>
            <option value='plastic'>Plastic</option>
            <option value='metal'>Metal</option>
            <option value='paper'>Paper</option>
            <option value='electronics'>Electronics</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Price Range</label>

          <select 
          value={filteredProducts.priceRange}
          className="transition-all duration-500 w-full border bg-green-500 border-gray-300 rounded-lg p-2"
           onChange={(e)=>{
            setFilteredProducts(prev => ({...prev, priceRange: e.target.value}));
            priceRangeFilter(e.target.value)


           }}
           >
            <option value=''>All Prices</option>
            <option value='under-50'>Under 50GHS</option>
            <option value='50-100'>50 - 100GHS</option>
            <option value='100-500'>100 - 500GHS</option>
            <option value='over-500'>Over 500GHS</option>
          </select>
          </div>




           <div className="mb-4">
          <label className="block mb-2 font-medium">Location</label>

          <select 
          value={filteredProducts.location}
  
          className="transition-all duration-500 w-full border bg-green-500 border-gray-300 rounded-lg p-2"
           onChange={(e)=>{
            setFilteredProducts(prev => ({...prev, location: e.target.value}));
            locationFilter(e.target.value)


           }}
           >
            <option value=''>All Location</option>
            <option value='accra'>Accra</option>
            <option value='kumasi'>Kumasi</option>
            <option value='takoradi'>Takoradi</option>
            <option value='tamale'>Tamale</option>
          </select>
          </div>

         <div className="space-y-2">
          <label className="block mb-2 font-medium">Condition</label>
          <label id='sorted' className=" flex flex-nowrap items-center  mr-4">
           <input 
           checked={filteredProducts.isSorted === true}
           onChange={() => {
              handleConditionChange(true);
            setFilteredProducts(prev => ({...prev, isSorted: true}));
          
           }}
           type="radio" name="condition"  className="form-checkbox h-5 w-5 text-green-600"
            />
           <span className="ml-2 cursor-pointer">Sorted</span>
          </label>
          <label id='mixed' className="flex flex-nowrap items-center">
           <input 

           checked={filteredProducts.isSorted === false}
           onChange={() => {
              handleConditionChange(false);
            setFilteredProducts(prev => ({...prev, isSorted: false}));
          
           }}
           type="radio" name="condition"  className="form-checkbox h-5 w-5 text-green-600"
           />
           <span className="ml-2 cursor-pointer">Mixed</span>
          </label>
         
         </div>


        </div>
        {/*  Slider   */ }


      
     
    </div >
    <div className=" flex flex-wrap justify-center gap-4 ">
  <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
  <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
  <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
  <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />




 </div>

   <div>
    { /*space for pagination*/}
   </div>
  

     <div className="my-5 flex justify-center items-center ">
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
       previous
      </button>
      <span className="mx-4 text-gray-700 font-bold">Page 1 of 5</span>

      <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors ml-5 cursor-pointer">
       Next
      </button>
     
     </div>
    
 
    

    </div>

     
    
    </div>
  ); 
}
