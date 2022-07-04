import React from "react";
import s from './ProfileInfo.module.css'
import nature from "../../../nature.jpg";
import {profileInfoType} from "../../../redux/state";
import {Preloader} from "../../Preloader/Preloader";

type ProfileInfoPropsType = {
    profileInfoData: profileInfoType
}

function ProfileInfo(props: ProfileInfoPropsType) {

    const {profileInfoData} = props

    if (!profileInfoData) {
        return <Preloader/>
    }

    console.log()

    return (
        <div>
            <img src={nature} className={s.general_image}/>
            <div className={s.profile}>
                {profileInfoData.photos.small
                    ? <img src={profileInfoData.photos.small} className={s.avatar}/>
                :
                    <div className={s.avatar_block}>{profileInfoData.fullName?.slice(0, 1)}</div>}
                <div className={s.profile_info}>
                    <div>{`${profileInfoData.fullName} `}</div>
                    <div>Web Site: {profileInfoData.contacts.website}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


