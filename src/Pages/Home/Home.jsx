import Accordion from '../../components/Accordion'
import constants from '../../constants'

const renderList = (list, animation) => {

    return <>
        {
            list.map((elem, index)=><li key={elem.text+index} className={`cursor-pointer border-[4px] hover:border-[rgba(59,130,246,0.5)] transition-all duration-150 first:mt-0 mt-[1rem] h-[62px] w-full bg-white text-black hover:text-[rgba(59,130,246,0.5)] rounded-[1rem] flex items-center justify-center relative ${animation ? 'first:animate-first-list-animate' :''}`}>
            {elem.text}
            <span className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-black/60"/>
        </li>)
        }
    </>
}

const HomePage = () =>{
    const { list_data, list_data2, contact}  = constants;

    return (
        <main className="min-h-screen flex pt-10 pb-32 bg-black text-white">
            <div className="max-w-[780px] w-full mx-auto">
                <header className="w-full flex flex-col items-center">
                <img src='https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=dcc3b090-5b10-11ed-9d37-7142a98f4918' alt='avatar' className="w-[98px] h-[98px] rounded-full" />
                <h4 className="mt-4 font-semibold text-[1rem] flex items-center gap-2">Ninja <span className='w-4 h-4 bg-blue-600 rounded-full'/></h4>
                <p className="flex items-center gap-2">I love video games <span className="w-4 h-4 bg-blue-400 rounded-full"/></p>
                </header>
                
                <ul className="w-full mt-10">
                    {
                        renderList(list_data, true)    
                    }
                    <Accordion text={
                        <>
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-black/60"/>
                            Twitch
                        </>}>
                        <div className='h-[700px] w-full bg-black text-white flex items-center justify-center'>
                            children goes here
                        </div>
                    </Accordion>
                    {
                        renderList(list_data2, false)
                    }
                </ul>

                {/* Contact */}
                <ul className="mt-20 flex justify-center gap-[1rem]">
                    {
                        contact.map((elem, index) => 
                            <li key={elem.link + index} className="cursor-pointer w-[45px] h-[45px] bg-white rounded-full hover:-translate-y-1 transition-all duration-300">
                                <a href={elem.link}>
                                    <span className="w-6 h-6 rounded-full bg-slate-600"/>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className='w-10 h-10 rounded-full bg-white cursor-pointer fixed top-10 right-20'/>
        </main>
    )
}

export default HomePage;