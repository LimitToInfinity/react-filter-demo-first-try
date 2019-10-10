import React from 'react';

function FilterForm(props) {

    // handleChange function here to set dogFilter in state to value of event target
    //pass event target value to filterDogs function in handleChange
    const handleChange = (event) => {
        const { value } = event.target;
        props.filterDogs(value);
    }

    // console.log("dog filter in filter form", this.state.dogFilter)
    return (
        <div>
            <label htmlFor="filter">Filter by Dog: </label>
            <input type="text" id="filter"
            // add onchange event listener
            onChange={handleChange}
            />
        </div>
    );
}

export default FilterForm;