import populer1 from "../../componets/asesst/imges/popular-01.jpg";

export const Mostpoupler = () => {
    return (

        <div className="wrapper">
            <div className="section-header flex items-center">
                <h4 className="flex gap-2 text-3xl">Most populer <span className=" text-pink-600 text-3xl">Right Now</span></h4>
            </div>

            <div className="items  p-5 w-44 bg-gray-800">
                <div className="item   ">
                    <img className="item-img rounded-2xl" src={populer1} />
                    <div className="item-contant">
                        <div className="item-title">
                            <h4>Fortnaite <br />
                                <span>SandBox</span>
                            </h4>
                            <ul>
                                <li><span>4.8</span></li>
                                <li><span>2.3</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mostpoupler;