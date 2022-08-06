import React from 'react';

import Card from './components/Card'
import UserCard from './components/UserCard';

import getUser from './api/UserData'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      buttonColor: true,
    }
  }

  componentDidMount(){
    const user = getUser();
    this.setState({user: user});
  }

  handleClick(card_action){
    const action={
      'ward': ()=>{alert('Ward 2A')},
      'bedid': ()=>{
        const value = this.state.buttonColor;
        this.setState({buttonColor: !value});
      },
      'payment': ()=>{alert('Insurance')},
    };
    action[card_action]();
  }

  onDoubleClickHandler(){
    console.log('Premier Single');
  }
  
  render(){
    if(this.state.user){
      return (
        <div className='flex flex-col bg-gray-200'>
          <div className='mt-[5%] mx-[7.5%] lg:mx-15'>
            <UserCard user={this.state.user.user_data}/>
          </div>
          <div className='mx-[6%] my-[3%] grid md:grid-cols-4 place-items-center sm:grid-cols-2 '>
            <Card title={'Ward'} onClick={() => this.handleClick('ward')} buttonColor={'bg-blue-300'}/>
            <Card title={'Room'} onDoubleClick={this.onDoubleClickHandler} buttonColor={'bg-pink-200'}/>
            <Card title={'Bed ID'} onClick={() => this.handleClick('bedid')} buttonColor={this.state.buttonColor?'bg-yellow-200':'bg-red-200'} />
            <Card title={'Payment'} onClick={() => this.handleClick('payment')} buttonColor={'bg-green-200'}/>
          </div>
          </div>
      
      );
    }
    return (
      <div>
        Loading....
      </div>
    );

    
  }
}

export default App;