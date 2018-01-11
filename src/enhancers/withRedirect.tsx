import React from 'react';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import axios from 'axios';

import {Redirect} from 'react-router-dom';

interface State {
    redirect: string;
}
interface Props {

}

const enhanceWithRedirect = () => {
    return (WrappedComponent: any) => {
        return class extends React.Component<Props, State> {
            constructor(props) {
                super(props);
                this.state = {
                    redirect: ''
                };
            };

            setRedirect = (redirect) => {
                this.setState({
                    redirect
                });
            };

            render() {
                if (this.state.redirect) {
                    return (
                        <Redirect to={this.state.redirect}/>
                    )
                } else {
                    return (
                        <WrappedComponent {...this.props} setRedirect={this.setRedirect}/>
                    )
                }
            }
        }
    }
};
export default enhanceWithRedirect;
