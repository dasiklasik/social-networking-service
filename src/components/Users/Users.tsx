import React from "react";

type usersPropsType = {
    usersData: any
}

export const Users = (props: usersPropsType) => {
    return (
        <div>
            <h2>Users</h2>
            {props.usersData}
        </div>
    )
}