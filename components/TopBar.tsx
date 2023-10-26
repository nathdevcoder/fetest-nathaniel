import Image from 'next/image'
import React from 'react'
import style from './TopBar.module.scss' 
export default function TopBar() {
  return (
    <div className={style.Topbar}>
        <div className={style.TopbarSearch}>
            <input type="text" placeholder='Search..'/>
            <button>
            <Image
                src={'/search.svg'}
                alt="search button"
                width={20}
                height={20}
                priority
            />
            </button>
        </div>
        <div className={style.TopbarSettings}>
            <Image
                src={'/acc.png'}
                alt="search button"
                width={36}
                height={36}
                priority
            />
            <div className={style.account}>
                <p>Jane Dee</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.34575 7.50382C5.2685 7.58092 5.20721 7.67249 5.16539 7.7733C5.12358 7.87411 5.10205 7.98218 5.10205 8.09132C5.10205 8.20046 5.12358 8.30853 5.16539 8.40934C5.20721 8.51016 5.2685 8.60173 5.34575 8.67882L9.17075 12.5038C9.24785 12.5811 9.33942 12.6424 9.44023 12.6842C9.54105 12.726 9.64911 12.7475 9.75825 12.7475C9.86739 12.7475 9.97546 12.726 10.0763 12.6842C10.1771 12.6424 10.2687 12.5811 10.3458 12.5038L14.1708 8.67882C14.2479 8.60167 14.3091 8.51008 14.3509 8.40928C14.3926 8.30847 14.4141 8.20043 14.4141 8.09132C14.4141 7.98221 14.3926 7.87417 14.3509 7.77337C14.3091 7.67257 14.2479 7.58098 14.1708 7.50382C14.0936 7.42667 14.002 7.36547 13.9012 7.32372C13.8004 7.28196 13.6924 7.26047 13.5833 7.26047C13.4741 7.26047 13.3661 7.28196 13.2653 7.32372C13.1645 7.36547 13.0729 7.42667 12.9958 7.50382L9.75409 10.7372L6.52075 7.50382C6.19575 7.17882 5.66242 7.18716 5.34575 7.50382Z" fill="#49494B"/>
                </svg>   
            </div>
            <button>
                <Image src={'/bell.svg'} alt="search button"  width={20} height={20} />
            </button>
            <button>
                <Image src={'/settings.svg'} alt="search button"  width={20} height={20} />
            </button>
            <button>
                <Image src={'/signout.svg'} alt="search button"  width={20} height={20} />
            </button> 
        </div>
    </div>
  )
}
