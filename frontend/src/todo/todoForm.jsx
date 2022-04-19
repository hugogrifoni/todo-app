import React from 'react' 
import Grid from '../template/grid'
import iconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    
    return (
        <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input id='description' className='form-control' 
            placeholder='Adicione uma tarefa'
            onChange={props.handleChange}
            value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <iconButton style='primary' icon='plus'
            onClick={props.handleAdd}></iconButton>
            <iconButton style='info' icon='search'
            onClick={props.handleSearch}></iconButton>
            <iconButton style='default' icon='close'
            onClick={props.handleClear}></iconButton>
        </Grid>
        
    </div>
    )
}