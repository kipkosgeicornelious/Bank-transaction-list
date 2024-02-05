import React from "react";
function Login (){

    return(
        <>
        <form>
            <label> Enter Transaction No.</label><br></br>
            <input type="text" id='transaction' placeholder="transaction "/>
            <input type="submit" value="Add"/>
        </form>
        
        </>
    );
}
export default Login