import logo from '../../componets/asesst/imges/logo.png'

const Header = () => {


    return (
        <div className=" ">

            <div className="flex justify-between items-center bg-gray-950  py-5">
                <img src={logo} ></img>
                <button className="btn"> <i className='bx bx-search'></i> <p>Type Somthing</p></button>

                <ul className="text-white text-sm flex justify-around items-center">
                    <a href="#" className="hover:text-pink-600 transition ease-in-out duration-200"><li>Home </li></a>
                    <a href="#" ><li>Browse</li></a>
                    <a href="#"><li>Details</li></a>
                    <a href="#" ><li>Stream</li></a>
                    <a href="#" className=" text-base px-4 py-2 text-gray-500 bg-slate-800  rounded-full mx-32;">Profile</a>
                </ul>
            </div>
        </div>
    )

}

export default Header;