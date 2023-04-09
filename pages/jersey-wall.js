import JerseySingleSide from "@/components/JerseySingleSide";
import purple from 'assets/Purple.png'
import gold from 'assets/Gold.png'
import pink from 'assets/Pink.png'

export default function jerseyWall() {
    const jerseyList = [
        {
            year: 2022,
            image: purple
        },
        {
            year: 2021,
            image: gold
        },
        {
            year: 2020,
            image: pink
        }];
    return (
        <div>
            {
                jerseyList.map((jersey) => {
                return  <div className="p-10 rounded border-solid border-2 mb-20">
                            <div className="mb-5 flex justify-center">
                                <p className="text-xl">{jersey.year}</p>
                            </div>
                            <div className="grid grid-cols-2" >
                                <div className="mr-20 w-fit transform transition duration-200 hover:scale-105">
                                    <JerseySingleSide imgPath={jersey.image}/>
                                </div>
                                <div className="ml-20 w-fit transform transition duration-200 hover:scale-105">
                                    <JerseySingleSide imgPath={jersey.image}/>
                                </div>
                            </div>
                        </div>
                })
            }
        </div>
    );
}
