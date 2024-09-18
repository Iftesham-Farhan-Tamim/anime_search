import React from 'react'

function AnimeCard({ anime }) {
    return (
        <div className='bg-white'>
            <div className='flex bg-white'>
                <div className='card'>
                    <img src={anime.images?.jpg?.image_url} alt="{anime.title}" />
                </div>
                <div>
                    {/* <h3>{anime.title}</h3> */}
                </div>
            </div>
        </div>
    )
}

export default AnimeCard    