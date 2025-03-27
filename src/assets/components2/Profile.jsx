import React from 'react'

const Profile = ({name, size}) => {
    const imgStyle = 'rounded-full m-auto max-md:w-[400px]';
        return (
          <img className={imgStyle}
            src='https://scontent.fmnl20-1.fna.fbcdn.net/v/t39.30808-6/475218638_3974504302777447_6091628805612588257_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHhBB_ZATap12A6PkkDJz9Gh09sedruI3KHT2x52u4jcin3urCCXEcbPXnR1BTjWnGk6fSShPDLkImbMlGM_DC3&_nc_ohc=rru2yvBK6bIQ7kNvgHBDYOc&_nc_oc=AdizhSmHRJCtxOdoV5skBFhFa-NCRXDb4IUxj4pTJUX1PO6NmRyRMAI5b4JSp-jfsnM&_nc_zt=23&_nc_ht=scontent.fmnl20-1.fna&_nc_gid=ApJWLyLemPgNe7ZHfi1Utm-&oh=00_AYBtkdTmviW-uvNHSId1Xd5B6m2bcKdFVLv3xkPqnWrtQw&oe=67C865B3'
            alt={name}
            width={size}
            height={size}
          />
        )
    }
export default Profile