import React from 'react';
import { Header, View } from '@adobe/react-spectrum';

const CustomHeader = () => {
    return <View
        borderWidth="thin"
        borderColor="dark"
        padding="size-250">
        <Header minHeight="size-1200">File upload and download</Header>
    </View>
}

export default CustomHeader;