import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDragging
        ? 'lightgreen'
        : 'white'
  };

  display: flex;
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export default class Task extends Component {
  render() {
  return (
    <Draggable 
      draggableId={this.props.task.id} 
      index={this.props.index}
    >
      {(provided, snapshot) => (
        <Container 
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
        >
          <Handle {...provided.dragHandleProps} />
        {this.props.task.content}
      </Container>
      )}
    </Draggable>
  );
  }
}
