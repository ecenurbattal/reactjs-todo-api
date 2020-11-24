import React from 'react';
import Button from '../Button/Button';
import {Wrapper, ListItem, ButtonBox,Text} from './TodosList.styles';

const TodosList = ({todos,onListItemClick,onDeleteClick,onDoneClick}) => {
    return (
        <Wrapper>
            {todos.map((todo) => (
                <ListItem key={todo.id} onClick={() => onListItemClick({
                    ...todo,
                    title:prompt('Write your new title')
                }
                )}>
                    <Text isDone={todo.isDone}>{todo.title}</Text>
                        <ButtonBox>
                            <Button text={todo.isDone ? "-" : "✓"}
                            background="white"
                            color={todo.isDone ? "red" : "lightgreen"}
                            font-weight="700"
                            height="30px"
                            onClick={(event) => {
                                event.stopPropagation();
                                onDoneClick && onDoneClick({
                                ...todo,
                                isDone:!todo.isDone
                            })}}
                            />
                            <Button text="X"
                                background="white"
                                color="red"
                                font-weight="700"
                                height="30px"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onDeleteClick && onDeleteClick(todo)
                                }}
                            />
                        </ButtonBox>
                </ListItem>
            ))}
        </Wrapper>
    )
}

export default TodosList
