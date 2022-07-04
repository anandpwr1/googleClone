import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicNoneSharpIcon from '@mui/icons-material/MicNoneSharp';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
    const [{ }, dispatch] = useStateValue();
    //it gives us state which tells how data looks like and
    // dispatch that allows us to shoot action in the data 

    const [input, setInput] = useState('');
    // const history = useHistory(); -- it will not work in current react version
    const navigate = useNavigate();

    const search = (event) => {
        event.preventDefault();
        //it do something with input so value stays in the input variable.

        console.log("you hit the search button -> ", input);

        // whenever we will hit the search button ,we will push the history to /searchpage
        navigate('/searchpage');

        // it will dispatch an action
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
    }
    return (
        // we make div to form so that button in form we can add type ="submit " field.
        // when we press enter button , it will submit the button .bascially it means it will run onClick ={search}
        <form className="search">
            <div className="search__input">
                <MicNoneSharpIcon />
                <input value={input} placeholder='Search on Google' onChange={event => setInput(event.target.value)} />
                <SearchIcon className="search__inputIcon" />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit"
                        onClick={search}
                        variant="outlined">
                        Google Search
                    </Button>

                    <Button variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button
                        className="search_buttonsHidden"
                        type="submit"
                        onClick={search}
                        variant="outlined">
                        Google Search
                    </Button>
                    <Button
                        variant="outlined"
                        className="search_buttonsHidden"

                    >

                        I'm Feeling Lucky
                    </Button>
                </div>
            )}

        </form>
    );
}

export default Search
