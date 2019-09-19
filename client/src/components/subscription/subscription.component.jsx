import React, { Component } from 'react';
import { connect } from 'react-redux';
import './subscription.styles.scss';
import swal from 'sweetalert2';
import { subscriptionSuccess } from '../../redux/user/user.actions';

class Subscription extends Component {
    
    state = {
            email: ''
    }

    swalfunction() {
                swal.fire({
                    type: 'success',
                    title: '¡Subscripción Realizada!',
                    confirmButtonText: 'Continuar'
                })
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.props.subscriptionSuccess(this.state)
    };

    handleChange = async event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };


    render() {
        return (
            <div id="register" className="call-action-primary py-80 ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm-12 ">
                            <div className="call-action-primary-content text-center ">
                                <h1 className="text-white mb-3 call-action-head ">¿Quieres estár pendiente de actualizaciones y nuevos productos?</h1>
                                <p className="text-white call-action-text ">Déjanos tu correo electrónico y te notificaremos de nuestros nuevos productos, servicios, eventos de centro de experiencia en vivo y boletines informativos</p>
                                <form onSubmit={this.handleSubmit} className="mt-5 ">
                                    <div className="input-group call-action-primary-search ">
                                        <input onChange={this.handleChange} className="form-control call-action-primary-input " placeholder="Correo" />
                                        <div className="input-group-append">
                                            <button onClick={this.swalfunction} type="submit" className="call-action-primary-btn ">Suscribirse</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    subscriptionSuccess: subscriber => dispatch(subscriptionSuccess(subscriber))
});
  
export default connect(null, mapDispatchToProps)(Subscription);
