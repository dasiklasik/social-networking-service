import React, {ChangeEvent, FocusEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    setProfileStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const {
        status,
        setProfileStatus,
    } = props

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(status)


    useEffect(() => {
        if (status !== value) {
            setValue(status)
        }
    }, [status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const inactiveEditMode = (e: FocusEvent<HTMLInputElement>) => {
        setProfileStatus(value)
        setEditMode(false)
    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }

        const actualStatus = status || '----'


        return (
            <div>
                {
                    editMode ?
                        <div>
                            <input
                                onChange={changeInputValue}
                                value={value}
                                onBlur={inactiveEditMode}
                                autoFocus
                            />
                        </div>
                        : <span onDoubleClick={activateEditMode}>{actualStatus}</span>
                }


            </div>
        )

}