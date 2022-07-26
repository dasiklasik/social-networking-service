import React, {ChangeEvent, FocusEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    setProfileStatus: (status: string) => void
}

type stateType = {
    editMode: boolean
    status: string | null
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                editMode: this.state.editMode,
                status: this.props.status,
            })
        }
    }


    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.state.status,
        })
    }

    inactiveEditMode = (e: FocusEvent<HTMLInputElement>) => {
        this.setState({
            editMode: false,
            status: this.state.status,
        })
        this.props.setProfileStatus(this.state.status)
    }

    changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            editMode: this.state.editMode,
            status: e.currentTarget.value,
        })
    }

    render() {

        const {
            status,
        } = this.state

        const newStatus = this.props.status

        const newState = this.state

        const actualStatus = status || '----'


        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input
                                onChange={this.changeInputValue}
                                value={status}
                                onBlur={this.inactiveEditMode}
                                autoFocus
                            />
                        </div>
                        : <span onDoubleClick={this.activateEditMode}>{actualStatus}</span>
                }


            </div>
        )
    }
}