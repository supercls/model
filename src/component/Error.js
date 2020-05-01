import React from 'react'

class ErrorBoundary extends React.Component{
    static getDerivedStateFromError(){
      return{
        hasError:true
      }
    }
    constructor(props){
      super(props);
      this.state = {
        hasError:false
      }
    }
    render(){
      return this.state.hasError?<h2>some error happened</h2>:this.props.children;
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        
    }
  }

  export default ErrorBoundary