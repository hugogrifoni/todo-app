import React from 'react' 
import iconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
           list.map(todo => (
               <tr key={todo._id}>
                   <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <iconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></iconButton>
                        <iconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleAsPending(todo)}></iconButton>
                        <iconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></iconButton>
                    </td>
               </tr>
           ))
        )
    }
    
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}