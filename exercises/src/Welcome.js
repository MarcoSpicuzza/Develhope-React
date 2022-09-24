const Welcome = (props) => {
    return ( 
        <div>
            {props.name ? <h1>Welcome {this.props.name}</h1> : <h1>Welcome User</h1>};
        </div>
     );
}
 
export default Welcome;