import React, { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import {GoPlus} from "react-icons/go";
import {motion} from "framer-motion";

const mapStateToProps =(state) => {
    return{
        todos:state,
    };
};

const mapDispatchedToProps = (dispatch) => {
    return{
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos =(props) => {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleAnswerChange = (event) => {
		if(event.key === "Enter"){
			add();
	}
    }

    const add = () => {
        if(todo === "") {
            alert ("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random()*1000),
                item: todo,
                completed: false,
            })
            setTodo("");
        }
    }
    

    // console.log("Props frome store", props);

    return(
        <div className="addTodos">
        <input 
        type="text" 
        onChange={(e)=> handleChange(e)} 
        className="todo-input"
        value={todo}
        onKeyPress={handleAnswerChange}

        />

        <motion.button
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9}}
        className='add-btn' onClick={() => add()}>
            <GoPlus/>
            </motion.button>
            <br/>
        </div>
        )
}

export default connect(mapStateToProps,mapDispatchedToProps)(Todos);