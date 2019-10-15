import React from 'react';


import PageLoading from '../components/PageLoading'
import BadgeDetails from './BadgeDetails';
import PageError from '../components/PageError'
import api from '../api';


class BadgeDetailsContainer extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, data:data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    hanldeOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    hanldeCloseModal = e => {
        this.setState({modalIsOpen: false})
    }

    hanldeDeleteBadge = async e => {
        this.setState({loading:true, error: null})
        try{
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({loading:false})
            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error} />
        }

        return(
            <BadgeDetails onCloseModal={this.hanldeCloseModal} 
            onOpenModal={this.hanldeOpenModal} modalIsOpen={this.state.modalIsOpen} badge={this.state.data}
            onDeleteBadge={this.hanldeDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainer;