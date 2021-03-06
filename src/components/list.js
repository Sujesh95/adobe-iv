import React from 'react';
import { ListBox, Item } from '@adobe/react-spectrum';

const List = props => {
    return <ListBox
        width={props.width}
        aria-label={props.ariaLabel}
        items={props.items}
        selectionMode={props.selectionMode}
        onSelectionChange={props.changed}>
        {(file, i) => <Item key={i}>{file.name}</Item>}
    </ListBox>

}

export default List