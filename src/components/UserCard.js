import  med from "../med.png"
function UserCard(props){
    return(
        <div className="p-3 bg-white px-6 sm w-full rounded-xl">
            <div className="p-2 m-2 flex justify-between items-center">  {/*main div user card*/}
                <div className="flex">{/*details div avatar side*/}
                    <div>{/*avatar image*/}
                    <img className="rounded-full" src= {props.user.avatar} width={80} alt='no img'/>                    
                    </div> 
                    <div>{/*user details*/}
                        <p className="text-2xl px-2 font-bold">{props.user.name}</p>
                        <div className="flex text-base px-1">
                            <p className="px-1">{props.user.gender}</p>
                            <p className="flex justify-center px-1 bg-gray-200 text-[12px] rounded-lg">{props.user.age} yrs</p>
                        </div>   
                    </div>
                </div>
                <div className="flex-cols ">{/*details div id side*/}
                    <div className="flex justify-end">
                        <div className="px-2"><svg fill='red' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"/></svg></div>
                        <div className= "text-xl">{props.user.user_id}</div>    
                    </div>
                    
                    <div className= "flex text-gray-400 text-base">{props.user.timestamp}</div>
                </div>
            </div>

            <div className="p-2 m-2 rounded-sm flex bg-blue-100 justify-between">
                <div className="flex flex-row"> {/*name side*/}
                    <div className="justify-center items-center"> {/*image*/}
                        <img src = {med} width={100}alt='no img'/>
                    </div>
                    <div className="flex flex-col justify-center px-1 border-r-2 border-gray-400"> {/*name*/}
                        <div className="pr-2 font-medium text-base pb-0.5 text-purple-900"> {/*image*/}{props.user.doctor.name}</div>
                        <div className="pr-2 font-medium text-base">{props.user.doctor.type}</div>                 
                    </div>
                </div>
                <div className="flex pl-2 flex-1 items-center"> {/*des side*/}
                    <div className="text-sm px-1 max-w-xl italic">
                        {props.user.doctor.description}
                    </div>    
                </div>
            </div> 
        </div>
    );
}

export default UserCard;