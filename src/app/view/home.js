import Image from 'next/image';
import Navbar from '../view/layout-components/navbar';
import Searchbar from '../view/layout-components/searchbar';
import Drawer from '../view/layout-components/drawer';
import Carousel from '../view/layout-components/carousel';
import CarouselWrapper from '../view/layout-components/carousel-wrapper';

export default function Home(){
    return(
        <div className="bg-[#F2F2F2]">
            <Navbar/>
            <div  className="min-h-screen flex flex-col items-center py-8">
                <br/>
                <Searchbar/>
                <br/>
                <br/>

                <div className="w-full flex flex-row px-4 gap-4">
                    <div className="bg-[#E7E7E7] flex items-center rounded-full w-fit px-3 py-1">
                        <h2 className="text-[#000000] text-md font-bold">Populer</h2>
                    </div>

                    <div className="bg-[#E7E7E7] flex items-center rounded-full w-fit px-3 py-1">
                        <h2 className="text-[#000000] text-md font-bold">Genre</h2>
                    </div>
                </div>

                <br/>
                <div className="flex flex-row gap-4 overflow-x-auto font-bold px-4">
                    <Carousel/>
                    <Carousel/>
                    <Carousel/>
                    <Carousel/>
                </div>

                <br/>
                <br/>

                <h2 className="text-[#000000]">Games</h2>
                <br/>

                <div className="w-full px-5">
                    <CarouselWrapper/>
                </div>
                <br/>
            </div>
        </div>
    );
}