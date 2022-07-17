import React from "react";
import s from './ProfileInfo.module.css'
import {profileInfoType} from "../../../redux/state";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profileInfoData: profileInfoType
}

function ProfileInfo(props: ProfileInfoPropsType) {

    const {profileInfoData} = props

    if (!profileInfoData) {
        return <Preloader/>
    }

    debugger
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
                    <ProfileStatus status={profileInfoData.status}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


