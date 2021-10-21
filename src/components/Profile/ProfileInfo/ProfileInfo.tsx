import React from "react";
import s from './ProfileInfo.module.css'
import nature from "../../../nature.jpg";

type ProfileInfoPropsType = {
    firstName: string
    lastName: string
    dateOfBirth: string
    city: string
    education: string
    webSite: string
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <img src={nature} className={s.general_image}/>
            <div className={s.profile}>
                <img src={''} className={s.avatar}/>
                <div className={s.profile_info}>
                    <div>{`${props.firstName} ${props.lastName}`}</div>
                    <div>Date of birth: {props.dateOfBirth}</div>
                    <div>City: {props.city}</div>
                    <div>Education: {props.education}</div>
                    <div>Web Site: {props.webSite}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


