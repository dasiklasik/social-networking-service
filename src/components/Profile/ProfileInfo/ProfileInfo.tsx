import React from "react";
import s from './ProfileInfo.module.css'
import nature from "../../../nature.jpg";
import {profileInfoType} from "../../../redux/state";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profileInfoData: profileInfoType
}

function ProfileInfo(props: ProfileInfoPropsType) {

    const {profileInfoData} = props

    console.log(profileInfoData)
    console.log(!profileInfoData)

    if (!profileInfoData) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profile}>
                {profileInfoData.photos.small
                    ? <img src={profileInfoData.photos.small} className={s.avatar}/>
                :
                    <div className={s.avatar_block}>{profileInfoData.fullName?.slice(0, 1)}</div>}
                <div className={s.profile_info}>
                    <div>{`${profileInfoData.fullName} `}</div>
                    <div>Web Site: {profileInfoData.contacts.website}</div>
                    <ProfileStatus status={'Hello'}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


