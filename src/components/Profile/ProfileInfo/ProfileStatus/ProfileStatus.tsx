import React, {ChangeEvent, FocusEvent} from "react";

type ProfileStatusPropsType = {
    status: string
}

type stateType = {
    editMode: boolean
    value: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: stateType = {
        editMode: false,
        value: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            value: this.state.value,
        })
    }

    inactiveEditMode = (e: FocusEvent<HTMLInputElement>) => {
        this.setState({
            editMode: false,
            value: this.state.value,
        })
    }

    changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            editMode: this.state.editMode,
            value: e.currentTarget.value,
        })
    }

    render() {
        const {
            status
        } = this.props

        const {
            value,
        } = this.state


        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input
                                onChange={this.changeInputValue}
                                value={value}
                                onBlur={this.inactiveEditMode}
                                autoFocus
                            />
                        </div>
                        : <span onDoubleClick={this.activateEditMode}>{status}</span>
                }


            </div>
        )
    }
}