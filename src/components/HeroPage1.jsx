import React from 'react'




const HeroPage1 = () => {
    const PageStyle = {
        marginTop: '55px',
        borderTop: '10px solid rgb(35,35,35)',
        backgroundColor: 'black',
        width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        
    };


  return (
    <div style={PageStyle}>

        <div className='container col-md-10 d-flex align-items-center gap-5'>
            
            <div>
                <h1 className='text-white'>
                    Enjoy on your TV 
                </h1>

                <p className='fs-5 text-white'>
                    Watch on Smart TVs, Playstation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players, and more.
                </p>
            </div>

            <div>
                <img className='w-75 ms-5 bg-white' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt="Image1" />
            </div>

        </div>
        

    </div>
  )
}

export default HeroPage1