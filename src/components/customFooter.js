import React from 'react';
import { Footer, View } from '@adobe/react-spectrum';

const CustomFooter = () => {
    return <View
        borderWidth="thin"
        borderColor="dark"
        padding="size-250">
        <Footer minHeight="size-1000">&copy; 2021, All rights reserved. </Footer>
    </View>
}

export default CustomFooter;