import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#d3a2b1',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color:'#fff',
    }
})

export default props => 
    <SafeAreaView style={styles.display}>
        <Text style={styles.displayValue} 
            numberOfLines={1}>{props.value}
        </Text>
    </SafeAreaView>
