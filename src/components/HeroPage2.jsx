import React from 'react'


const HeroPage2 = () => {
    const PageStyle = {
        borderTop: '10px solid rgb(35,35,35)',
        backgroundColor: 'black',
        width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        
    };
  return (
    <div style={PageStyle}>

        <div>
            <img className='w-75 ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Image2" />
        </div>

        <div>
            <h1 className='fs-1 fw-bold text-white'>
                Download your <br/> shows to watch <br/> offline
            </h1>

            <p className='fs-5 fw-bold text-white'>
                Save your favorites easily and always have <br/> something to watch.
            </p>
        </div>
    </div>
  )
}

export default HeroPage2