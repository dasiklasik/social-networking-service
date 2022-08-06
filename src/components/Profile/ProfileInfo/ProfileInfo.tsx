import React from "react";
import s from './ProfileInfo.module.css'
import {profileInfoType} from "../../../redux/state";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profileInfoData: profileInfoType
    status: string
    setProfileStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {

    const {
        profileInfoData,
        setProfileStatus,
        status,
    } = props

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
                    <ProfileStatusWithHooks status={status} setProfileStatus={ setProfileStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


