import "./style.css";

import React from "react";
import { Button, Input } from "antd";
import { withRouter } from "react-router-dom";

class SignPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            modalOpen: false,
            modalInput: ''
        };
        this.modalContext = {
            title: '',
            content: ''
        }
    }

    onEnterPress = (target) => {
        if (target && target.charCode == 13) {
            this.onButtonClick()
        }
    }

    handleInputChange = (event, key) => {
        let { value } = event && event.target;
        if (value) {
            this.setState({ [key]: value })
        }
    }

    onButtonClick = () => {
        const { email, password } = this.state;
        if (email && password && email === 'susha' && password === 'mahihusbandsusha') {
            // this.setState({ buttonClick: true })

            this.props.history.push({
                pathname: '/heart'
            })
            window.location.reload()
        }
    }

    render() {

        return (
            <div className="rui-main">
                <div className="rui-sign align-items-center justify-content-center">
                    <div className="bg-image">
                        < div className="bg-grey-1" />
                    </div >
                    <div
                        className="form rui-sign-form rui-sign-form-cloud"
                        style={{ height: "max-content", minWidth: "25rem" }}
                    >
                        <div className="vertical-gap sm-gap justify-content-center">
                            <div className="col-12 pl-0">
                                <h2 className="mb-20">
                                    {'Title'}
                                </h2>
                            </div>
                            {
                                <>
                                    <div className="col-12" style={{ margin: "1rem" }}>
                                        <Input
                                            autoFocus
                                            placeholder="Enter Email"
                                            id="email_input"
                                            className={('form-control')}
                                            onKeyPress={this.onEnterPress}
                                            onChange={(event) => {
                                                this.handleInputChange(event, 'email')
                                            }}
                                        />
                                    </div>
                                    <div className="col-12" style={{ margin: "1rem" }}>
                                        <Input
                                            autoFocus
                                            placeholder="Enter Password"
                                            id="email_input"
                                            className={('form-control')}
                                            onKeyPress={this.onEnterPress}
                                            onChange={(event) => {
                                                this.handleInputChange(event, 'password')
                                            }}
                                        />
                                    </div>

                                    <div className="col-12 mt-30 pl-0 pr-0">
                                        <Button
                                            type="primary"
                                            className="btn btn-brand btn-block text-center login-btn login-btn--doar"
                                            onClick={() => {
                                                this.onButtonClick()
                                            }}
                                        >
                                            {'Login'}
                                        </Button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(SignPage);