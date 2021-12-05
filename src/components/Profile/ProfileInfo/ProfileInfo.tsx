import React from "react";
import s from './ProfileInfo.module.css'
import nature from "../../../nature.jpg";
import {profileInfoType} from "../../../redux/state";

type ProfileInfoPropsType = {
    profileInfoData: profileInfoType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <img src={nature} className={s.general_image}/>
            <div className={s.profile}>
                <img src={''} className={s.avatar}/>
                <div className={s.profile_info}>
                    <div>{`${props.profileInfoData.firstName} ${props.profileInfoData.lastName}`}</div>
                    <div>Date of birth: {props.profileInfoData.dateOfBirth}</div>
                    <div>City: {props.profileInfoData.city}</div>
                    <div>Education: {props.profileInfoData.education}</div>
                    <div>Web Site: {props.profileInfoData.webSite}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


